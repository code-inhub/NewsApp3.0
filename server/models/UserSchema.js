const mongoose = require( "mongoose");

const userSchema = new mongoose.Schema({

      password:String,
      email:String,
      categories:[String],
      bookmarks:[{
            title:String,
            description:String,
            imageUrl:String,
            newsUrl:String,
            author:String,
            date:String,
            source:String,
      }]
  
})

module.exports = mongoose.model("user",userSchema);