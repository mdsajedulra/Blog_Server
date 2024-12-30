/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;

  public query: Record<string, unknown>;

  constructor(moduleQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = moduleQuery;

    this.query = query;
  }
  // search query on blogs
  search(searchableFields: string[]) {
    const search = this.query.search;

    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field: any) => ({
          [field]: { $regex: search, $options: "i" },
        })),
      } as FilterQuery<T>);
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.query }; // copy query elements

    const excludeFields = ["search", "sortBy", "sortOrder"];

    excludeFields.forEach((el) => delete queryObj[el]);

    if (queryObj.filter) {
      const queryFilter = { author: queryObj?.filter };

      this.modelQuery = this.modelQuery.find(queryFilter);
    }

    // console.log("lenght", Object.keys(queryFilter).length);

    // console.log("after delete", queryObj);

    return this;
  }

  sort() {
    let sortStr;

    if (this?.query?.sortBy && this?.query?.sortOrder) {
      const sortBy = this?.query?.sortBy;

      const sortOrder = this?.query?.sortOrder;

      sortStr = `${sortOrder === "desc" ? "-" : ""}${sortBy}`;

      // console.log(sortStr);

      // const sortOrder = this?.query?.sortOrder;
    }

    this.modelQuery = this.modelQuery.sort(sortStr);

    return this;
  }
}

export default QueryBuilder;
