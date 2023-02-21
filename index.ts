import express from 'express'
import bodyParser from "body-parser";
import morgan from "morgan";
const app = express();
app.use(bodyParser.json());
app.use(morgan('common'));//sử dụng middleware morgan
app.get('/',(req, res)=>{

    res.json({
        message : " OK"
    })
});
app.listen(2000,()=>{
    console.log('ok')
})