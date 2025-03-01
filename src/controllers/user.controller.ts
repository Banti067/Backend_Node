import { Request, Response, NextFunction } from "express";
import { RoleSchema } from "../models";

// class UserController{
//     async createUser(req,res,next){
// try {

// } catch (error) {
//     NextFunction(error)
// }
//     }
// }

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, phoneNumber, password, age, gender, address } =
        req?.body;

      const data = await RoleSchema.create({
        name,
        email,
        phoneNumber,
        password,
        age,
        gender,
        address,
      });
      res.json({
        status: "SUCCESS",
        message: "Successfully register as a user",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = "banti";

      res.json({
        status: "SUCCESS",
        message: "Successfully get the data",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
