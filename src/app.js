import express from "express"
import "dotenv/config";
import helmet from "helmet";
import router from "./routes/routes.js"
import { dbConnect } from "./config/dbmongoose.js";

const app = express();
app.use(helmet());

const PORT = process.env.PORT || 3000;

dbConnect(process.env.URI)
    .then(() => {
        console.log("Data base connection established.");
    })
    .catch((error) => {
        console.log(error);
    });

app.use(express.urlencoded())
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});