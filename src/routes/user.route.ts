import { Router } from "express";
import { UserController } from "../controllers";

export default class UserRoutes {
  public router: Router;
  private userController: UserController;
  public path = "users";

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.routes();
  }

  private routes() {
    this.router.post("/create-user", this.userController.createUser);

    this.router.get("/get-user", this.userController.getUser);
  }
}
