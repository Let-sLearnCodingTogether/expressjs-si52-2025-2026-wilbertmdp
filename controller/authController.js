import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js"; //ini penting, jangan salah

export const register = async (req, res) => {
    try {
        //untuk mengambil body atau data dari request
        const registerData = req.body
        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : hashPassword
        })

        res.status(201).json({
            message : "berhasil register, silahkan login",
            data : null
        })
    } catch(e){
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}

export const login = async (req, res) => {
    
    try{
        const loginData = req.body
        
        // select * from users where email = email
        // mencari user berdasakan email
        const user = await UserModel.findOne({
            email : loginData.email
        })

        if(!user){
            return res.status(404).json({
            message : "user tidak ditemukan",
            data : null
            })
        }
        // membandingkan password yang ada di dalam request dgn di database
        // bila berhasil
        if(user.password == loginData.password){
            return res.status(200).json({
                message : "login berhasil",
                data : {
                    username : user.username,
                    email : user.email,
                    token : "TOKEN"
                }
            })
        }
        //bila gagal
        return res.status(401).json({
                message : "login gagal",
                data : null
            })

    }catch(error){
        res.status(500).json({
            message : error,
            data : null
        })
    }
}