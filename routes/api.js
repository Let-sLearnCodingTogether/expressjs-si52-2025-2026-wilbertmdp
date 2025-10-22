import express from "express"
import * as authController from "../controller/authController.js"
import * as publicController from "../controller/publicController.js"
import { protect } from "../middleware/authMiddleware.js"

const api = express.Router()

//http://localhost:3000/api/register
//untuk menjalankan function register di authController
//install extencion mongodb untuk melihat isi database yang telah dibuat
api.post("/register", authController.register)

//http://localhost:3000/api/login
//untuk mengecek di postman untuk melihat bila function login di authController sudah benar
api.post("/login", authController.login)

api.get('/me', protect,publicController.privateProfile)


export default api