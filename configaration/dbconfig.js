const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://chinnuvenki6:bQSHDcgOpalbkUo2@cluster0.dtptz.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected Successfully");
        
    }catch (error){
        console.error("MongoDB connection error:error ");
    }
}

module.exports = {mongoose, connectDB}


//v3Ga6wNo6nvvykkk
