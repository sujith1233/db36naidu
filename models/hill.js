const mongoose = require("mongoose") 
const hillSchema = mongoose.Schema({ 
 name: String, 
 height: Number, 
});
 
module.exports = mongoose.model("Hill", 
hillSchema);