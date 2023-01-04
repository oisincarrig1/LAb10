const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
const bodyParser = require('body-parser')

//redundant due to build folder
/*app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});*/

//server.js
//add just under import section at the top of server,js
// Serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.ndslfdf.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//writing Schema
const gameSchema = new mongoose.Schema({
  title: String,
  score: String,
  year: String
});

//generate model
const gameModel = mongoose.model('games', gameSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/api/games',(req, res)=>{
  gameModel.find((error,data)=>{
    res.json(data);
  })
})

app.put('/api/game/:id', (req, res) => {
  console.log("Update: " + req.params.id);
  console.log(req.body);
  
  gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data)=>{
    res.send(data);
  })
})

app.get('/api/game/:id',(req, res)=>{
  console.log(req.params.id);

  gameModel.findById(req.params.id, (error, data)=>{
    res.json(data);
  })
})


/*listen for data*/
app.post('/api/games',(req, res)=>{
    //console.log(req, body);
    gameModel.create({
      title:req.body.title,
      score:req.body.score,
      year:req.body.year

    })
    res.send('Data recieved');
})

app.delete('/api/game/:id', (req, res)=>{
  console.log("Deleting: " + req.params.id);

  gameModel.findByIdAndDelete({_id: req.params.id}, (error, data)=>{
    res.send(data);
  })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})