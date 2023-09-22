const express = require('express');
const app = express();
const db = require("./models");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const ratingRoutes = require("./routes/ratingRoutes")
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes = require("./routes/messageRoutes")
require('dotenv').config(); // Add this line at the top of your code

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth",authRoutes)
app.use("/product",productRoutes)
app.use("/rating",ratingRoutes)
app.use("/chats",chatRoutes)
app.use("/chats/messages",messageRoutes)

db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("connected to server")
    });
})
