import User from "../modules/user/user.model";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = (...requiredRole: string[]) =>
  catchAsync(async (req, res, next) => {
    const authorization = req.headers.authorization;
    // console.log(authorization?.split(" "));

    const [Bearer, token] = authorization.split(" ");
    if (Bearer !== "Bearer" || !token) {
      throw new Error("You are not Authorized!");
    }
    const decoded = jwt.verify(token, "secret") as JwtPayload;
    const { email, role } = decoded;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    if (requiredRole && !requiredRole.includes(role)) {
      throw new Error("you are not Authorized");
    }
    req.user = decoded as JwtPayload;

    console.log("nosto token", token);

    next();
  });

export default auth;
