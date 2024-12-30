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
    this.modelQuery = this.modelQuery.find({
      $or: searchableFields.map((field: any) => ({
        [field]: { $regex: search, $options: "i" },
      })),
    } as FilterQuery<T>);
    return this;
  }

  // sort query
}

export default QueryBuilder;
