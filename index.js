const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");
const { connectDB } = require("./configaration/dbconfig");
const userRoute = require("./routes/userroute");


const app = express();

connectDB().then(() => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api/user", userRoute);

    app.listen(5000, () => {
        console.log("Server is running on http://localhost:5000");
    });
}).catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
});
