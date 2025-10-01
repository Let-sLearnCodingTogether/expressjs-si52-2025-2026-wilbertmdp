import mongoose from "mongoose";
import UserModel from "./userModel";


const LinkSchema = new mongoose.Schema(
    {
        Link : {
            type : String,
            trim : true,
            required: [true, "link name wajib di isi"]
        },
        Icon : {
            type : String,
            required: [true, "Icon picture wajib di isi"]
        },
        Url : {
            type : String,
            required : [true, "Url wajib di isi"]
        },
        User : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamp : true
    }
)

const LinkModel = mongoose.Model("Link", LinkSchema)

export default LinkModel