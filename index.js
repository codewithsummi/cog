import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
const PORT=process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on PORT ${PORT}`)
})