const mongoose = require('mongoose')
const uri = "mongodb+srv://new-user:1234@scotiabanksite.arcif.mongodb.net/ScotiabankSite?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('mongo connected')
})