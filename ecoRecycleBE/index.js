const express = require("express");
const cors = require('cors');
const app = express();

const {connectDB } = require("./config")

const { AuthRouter} = require("./routes/authRoutes")
const { SlotRouter } = require("./routes/slotRoutes")
const {VendorRouter} = require("./routes/vendorRoutes")


require('dotenv').config()



const corsOption = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOption));


app.use(express.json())


app.use('/auth', AuthRouter);
app.use('/slots', SlotRouter);
app.use('/vendors', VendorRouter);


app.get("/", (req, res) => {
    res.send("ecoRecycle Api is working");
});

app.listen(8080, () => {
    connectDB()
    console.log("Server started on http://localhost:8080");
});
