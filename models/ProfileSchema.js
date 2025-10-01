import mongoose from "mongoose";
import UserModel from "./userModel";


const ProfileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            trim : true,
            required: [true, "display name wajib di isi"]
        },
        ProfilePicture : {
            type : String,
            required: [true, "Profile picture wajib di isi"]
        },
        Bio : {
            type : String,
            minLength : [10, "minimak 10 karakter"],
            maxLength : [150, "minimak 150 karakter"],
            required : [true, "Bio wajib di isi"]
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

const ProfileModel = mongoose.Model("Profile", ProfileSchema)

export default ProfileModel