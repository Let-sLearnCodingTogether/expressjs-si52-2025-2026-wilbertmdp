import UserModel from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        //untuk mengambil body atau data dari request
        const registerData = req.body
        console.log(registerData);

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : registerData.password
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