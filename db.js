const mongoose = require('mongoose')
const url="mongodb+srv://nehal:P8KgMXfXDMeRWOM7@cluster0.te0i8rc.mongodb.net/?retryWrites=true&w=majority"
const connection = mongoose.connect(url).then(()=>{
 console.log('db conn');
})

module.exports = connection;
//P8KgMXfXDMeRWOM7