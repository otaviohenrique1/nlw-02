import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesControlles = new ClassesController();
const connectionsControlles = new ConnectionsController();

routes.get('/classes', classesControlles.index);
routes.post('/classes', classesControlles.create);

routes.get('/connections', connectionsControlles.index);
routes.post('/connections', connectionsControlles.create);

export default routes;