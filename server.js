const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
app.use(cors())
app.use(express.json());
const axios = require('axios');



const PORT = process.env.PORT

const getData = require('./Controller/GetData.controller')

const getFav = require('./Controller/GetFav.controller')

const addFav = require('./Controller/addFav.controller')

const deleteFav =require('./Controller/delete.controller')

const updateData = require('./Controller/Update.controller')

app.get('/getData',
getData
)

app.get('/getFav',
getFav
)

app.post('/addFav', 
addFav
)

app.delete('/deleteFav',
deleteFav
)

app.put('/updateData', 
updateData
)
app.get('/',
 function (req, res) { 
  res.send('Hello World') 
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})