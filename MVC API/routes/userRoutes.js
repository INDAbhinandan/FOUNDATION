import express from 'express'
import check from '../middleware/userMiddleware.js' 
import { getUser} from '../controllers/userController.js'
const route=express.Router()

route.get('/read',check,getUser)    //http://localhost:3000/api/users/read

export default route