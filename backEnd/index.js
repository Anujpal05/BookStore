import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3001;
const URL = process.env.MONGODBURL;

//connect to MongoDB
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB is connected...");
} catch (error) {
  console.log("Error : ", error);
}

//defining route
app.use("/book", bookRoute);
app.use("/user",userRoute);
app.use("/detail",contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
