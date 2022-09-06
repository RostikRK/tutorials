import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.3tdsxmo.mongodb.net/?retryWrites=true&w=majority'


const app = express()

app.use(express.json())
app.use('/api', router)
app.use(fileUpload({}))
app.use(express.static('static'))


async function startApp() {
    try {
        mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("Server started on Port; " + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()