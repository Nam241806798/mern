const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const post = require('./routes/post.index')
const mongoose = require('mongoose');




app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(morgan('combined'));


app.use('/api/post', post);
mongoose.connect('mongodb+srv://hoangnam1:Nam17031998@cluster0.b7tm1.mongodb.net/mern?retryWrites=true&w=majority',() => {
	console.log('success');
	app.listen(5000, () => console.log(`server is running ${5000}`));
})


