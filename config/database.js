import mongoose from "mongoose";

export const database = async () => {
    try{
        console.log("starting connection to mongodb");

        const response = await mongoose.connect("mongodb://127.0.0.1:27017/Wilbert?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")

        console.log(`connected seccessfully to mongodb at : ${response.connection.host}`);
    } catch (error) {
        console.log("mongodb connection failed");

        process.exit(1)
    }
}// awalnya connect("") kemudian ketik di cmd C:\Users\user1>mongosh, lalu masukkan link yang muncul di cmd
 // kemudian copy ke connect("disini") tambahkan nama anda ke disini?directConnection.