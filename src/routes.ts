import { Router } from "express";

// controllers
import { ListUserController } from "./controllers/ListUserController"
import { ListTagController } from "./controllers/ListLeitoController";
import { ListCompliementsController } from "./controllers/ListComplimentsController"
import { CreateUserController } from "./controllers/CreateUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateJwtController } from "./controllers/AuthenticateJwtController";
import { CreateCompliementController } from "./controllers/CreateCompliementController";

// middlewares
import { isAuth } from "./middlewares/ensureAuthenticate";
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();
// Get
const listUserController = new ListUserController();
router.get("/users", isAuth, ensureAdmin, listUserController.handle);

const listTagController = new ListTagController();
router.get("/leitos", isAuth, listTagController.handle);

const listCompliementsController = new ListCompliementsController()
router.get('/compliements', listCompliementsController.handle)
// Posts
const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createTagController = new CreateTagController()
router.post("/leitos", isAuth, ensureAdmin, createTagController.handle);

const authenticateJwtController = new AuthenticateJwtController();
router.post("/authenticate", authenticateJwtController.handle);

const createCompliementController = new CreateCompliementController();
router.post("/compliemnt", createCompliementController.handle);
// Put
// Deletes

export { router };