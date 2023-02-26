const mongoose = require("mongoose");
const url = process.env.MongoDB_Url;

mongoose.set('strictQuery', false)
mongoose.connect(url)
.then(()=>console.log("MongoDB Successfully Connected......"))
.catch(err => console.log(err))

