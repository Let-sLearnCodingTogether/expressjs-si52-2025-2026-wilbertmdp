import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "user name wajib di isi"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        password : {
            type : String,
            required : [true, "Password wajib di isi"],
        }
    },
    {
        timestamp : true
    }
)

const userModel = mongoose.model("User", UserSchema)

export default userModel
