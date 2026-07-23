import express from 'express'
import { CreateStd, deletestd, ReadStd, ReadStdbyId,updatestd } from '../controller/studentController.js'

const route=express.Router()

route.post('/create',CreateStd)  //http://localhost:5000/api/student/create
route.get('/',ReadStd)   //http://localhost:5000/api/student/
route.get('/:id',ReadStdbyId) //http://localhost:5000/api/student/:id
route.put('/:id',updatestd) //http://localhost:5000/api/student/:id
route.delete('/:id',deletestd) //http://localhost:5000/api/student/:id
export default route