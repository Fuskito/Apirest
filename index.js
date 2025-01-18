import express from "express"
import bodyParser from "body-parser"
import { PORT } from "./src/config.js"
import { connectDB } from "./src/db.js"
import userRoute from "./src/routes/userRoute.js"
import categoryRoute from "./src/routes/categoryRoute.js"
import productRoute from "./src/routes/productRoute.js"
import cors from "cors"
import cookieParser from 'cookie-parser'
import session from "express-session"


const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));




app.use(bodyParser.json());


app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: false, 
    saveUninitialized: false, 
  })
)


connectDB();


app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);


app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
