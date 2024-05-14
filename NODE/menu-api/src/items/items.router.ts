/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";



/**
 * Router Definition
 */

export const itemsRouter = express.Router()

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get("/", async(req: Request, res: Response) => {
    try {
        const items = await ItemService.findAll()
        res.status(200).send(items)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// GET items/:id
itemsRouter.get("/:id", async(req: Request, res: Response) => {
    try {
        const item = await ItemService.find(parseInt(req.params.id))
        if(item) {
            return res.status(200).send(item)
        }

        res.status(404).send("Item not found")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// POST items
itemsRouter.post("/", async(req: Request, res: Response) => {
    try {
        const item : BaseItem = req.body
        const newItem = await ItemService.create(item)

        res.status(201).json(newItem)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// PUT items/:id
itemsRouter.put("/:id", async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const itemToBeUpdated : Item = req.body
        const existigItem = await ItemService.find(id)

        if(existigItem) {
            const updatedItem = await ItemService.update(id, itemToBeUpdated)
            return res.status(200).json(updatedItem)
        }

        res.status(404).send("item not found")
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// DELETE items/:id
itemsRouter.delete("/:id", async(req: Request, res: Response) => {

    try {
        const id = parseInt(req.params.id)
        await ItemService.remove(id)
        res.sendStatus(204)
    } catch (error: any) {
        res.status(500).send(error.message)
    }

 
})