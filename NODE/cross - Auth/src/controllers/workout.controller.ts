import express, {Request, Response} from "express";
import workoutService from "../services/workout.service"

 const getAll = (req: Request, res: Response) => {
    const workouts = workoutService.getAll()
    res.send("Get all workouts")
}

 const getById = (req: Request, res: Response) => {
    const workout = workoutService.getById(parseInt(req.params.id))
    res.send("Get a workout by id" + req.params.id)
}

 const create = (req: Request, res: Response) => {
    const createdWorkout = workoutService.create()
    res.send("Get a workout by id")
}

 const update = (req: Request, res: Response) => {
    const workoutUpdated = workoutService.update(parseInt(req.params.id))
    res.send("update a workout" + req.params.id)
}

 const remove = (req: Request, res: Response) => {
    workoutService.remove(parseInt(req.params.id))
    res.send("delete a workout" + req.params.id)
}

export default {getAll, getById, create, update, remove}

