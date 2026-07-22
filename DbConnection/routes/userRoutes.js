import express from 'express'
import { userCreation,userRead } from '../controller/userController.js'

const route=express.Router()

route.get('/read',userRead)  //http://localhost:3000/api/read
route.post('/write',userCreation)//http://localhost:3000/api/write

export default route