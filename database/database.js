const mongoose= require("mongoose")

exports.connectDatabase= async()=>{
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.cs2qv7c.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    console.log("Database connected Sucessfully")
}