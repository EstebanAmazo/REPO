import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"

import v1WorkoutRouter from "./v1/routes/workout.router"


//cargar variables de entorno
dotenv.config()

/**
 * Variables de la app
 */

if(!process.env.PORT) {
    process.exit(1)
}

const PORT : Number = parseInt(process.env.PORT as string)
const app = express()

/**
 * Configuracion de la app
 */
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use("/api/v1/workouts", v1WorkoutRouter )

/**
 * Activacion del server
 */
app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto ${PORT}`)
})
