import express,{Request, Response, NextFunction} from "express";
import { OAuth2Client } from "google-auth-library";

const router = express.Router()


router
    .post('/', async (req : Request, res: Response, next: NextFunction) => { 
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
        res.header('Referrer-Policy', 'no-referrer-when-downgrade')

        const redirectURL = 'http://127.0.0.1:3000/oauth'

        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectURL
        )

        const authorizeURL = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
            prompt: 'consent'
        })

        res.json({url: authorizeURL})
    })


export default router