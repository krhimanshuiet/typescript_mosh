import express from 'express'
import router from './routers/remainder';
const app = express();
app.use(express.json())
app.use('/remainder',router)

app.get('/',(req,res) => {
    res.send('Hello world');
})

app.listen(8000 , () => console.log("server started himanshu"));
