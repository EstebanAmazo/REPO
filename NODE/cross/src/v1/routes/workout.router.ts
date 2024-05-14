import express, {Request, Response} from "express";
import workoutController from "../../controllers/workout.controller"
const router = express.Router()


router
    .get('/', workoutController.getAll)

    .get("/:id", workoutController.getById)

    .post("/", workoutController.create)

    .put("/", workoutController.update)

    .delete("/", workoutController.remove)

export default router