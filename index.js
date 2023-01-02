const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const root_dir = __dirname.split('src')[0]
dotenv.config({ path: path.join(root_dir, `.env`) });
const bodyParser=require('body-parser');
const {connectDb} = require("./config/db");
const gameRoute=require("./routes/routes");







//routes

const errorHandler = require("./middlewares/err");
const pageNotFound = require("./middlewares/pageNotFound");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));








const start=async()=>{
  try{
      const connect= await connectDb(process.env.MONGO_URI);
      console.log('connected---');
  }catch(err){
      console.log(err);
  }

}

start();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));



app.use("/game",gameRoute);
app.use(errorHandler);
app.use(pageNotFound);

