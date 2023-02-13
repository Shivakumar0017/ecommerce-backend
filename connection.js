require("dotenv").config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);



const connectionStr=`mongodb+srv://trendeyy:Ij1wqgpg4WQB9alv@cluster0.lf9jyia.mongodb.net/trendeyy?retryWrites=true&w=majority`;

mongoose.connect(connectionStr,{useNewUrlParser: true}).then(()=>console.log("connected to mongodb")).catch(err=>console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
  })

//MONGO_USERNAME=trendeyy
//MMONGO_PW=Ij1wqgpg4WQB9alv


