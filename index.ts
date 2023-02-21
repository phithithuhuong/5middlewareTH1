import express from 'express'
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
app.use(bodyParser.json());
app.use(morgan('common'));//sử dụng middleware morgan để ghi lại trong console.log()
app.use(helmet());//sử dụng helmet để bảo mật thông tin trong server
app.get('/',(req, res)=>{

    res.json({
        message : " OK"
    })
});
app.listen(2001,()=>{
    console.log('ok')
})