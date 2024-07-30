const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const userschema=mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    posts:[
        {type:mongoose.Schema.ObjectId,ref:"post"},
    ]

})

 module.exports=mongoose.model("user",userschema);