const express = require ("express");
const cors = require("cors");
const app = express();
const router = require("./routers/route")
const adminRoute = require("./routers/admin-router");
const connectDb = require("./utils/db")
const birthdayMail = require("./controller/sendMail");
const anniversaryMail = require("./controller/anniversaryMail");

const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", router)
app.use("/api/admin", adminRoute);

birthdayMail.sendMail();
anniversaryMail.anniversaryMail();

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is running");
    })
})