const express = require('express');
const bodyParser = require('body-parser')

const learnerRoute = require('./routes/learnerRoute')
const greetingRoute = require('./routes/greetingRoute')
const tipRoute = require('./routes/tiproute')
const magicRoute = require('./routes/magicRoute')
const port = 6000;
const app = express();

app.use(bodyParser.json())

app.use('/learner', learnerRoute)
app.use('/greeting', greetingRoute)
app.use('/tip', tipRoute)
app.use('/magic', magicRoute)

app.get('/', (req, res)=>{
    res.status(200).json({message: "API UP!"})
})



app.listen(port, () => {
    console.log('ONLINE')
})