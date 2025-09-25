const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());

const authRouter = require('./routes/authRouters');
const productRouter = require('./routes/ProductRouter')

const connectedDB = require('./db');
connectedDB();
// app.use(cors());
const corsOptions = {
  // 1. Specify the trusted origin
  origin: 'http://localhost:5173', 

  // 2. Allow credentials to be sent
  credentials: true, 

  // Optional: For legacy browser support
  optionsSuccessStatus: 200 
};

// 3. Apply the CORS middleware with your options
app.use(cors(corsOptions));



require("dotenv").config();
app.use('/' , authRouter);

app.use('/' , productRouter);

app.get('/home', (req,res)=>{

    return res.json({"Hi":"anish is here"})

})




const PORT = process.env.PORT || 3002;
app.listen(PORT , () => {
    console.log(`Hello,  Listening on PORT ${PORT} `)
} )