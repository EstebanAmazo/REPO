/**
 * Modulos externos requeridos
 */


import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { itemsRouter } from "./items/items.router"

// cargar variables de entorno
dotenv.config()


/**
 * Variables de la App
 */

//se evalua si la variable PORT esta definida en .env
if(!process.env.PORT) {
    process.exit(1)
}

const PORT : number = parseInt(process.env.PORT as string, 10)
const app = express()


/**
 *  Configuracion de la app
 */
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api/menu/items", itemsRouter)

/**
 * Activacion del server
 */

app.listen(PORT, () => {
    console.log(`servidor en el puerto ${PORT}`)
})