let express= require('express'),
bodyParser= require('body-parser');

var Cors=require('cors');







const app= express();

app.use(bodyParser.json());
app.use(Cors());
app.use(bodyParser.urlencoded({
    extended:true
}));

const router = require('./routes/creatureRoutes');
const dbConnection= require('./connection');




dbConnection();


app.use(express.json());
var Creature= require('./creature');

app.use('/api/v1/creature', require('./routes/creatureRoutes'));


// app.use(bodyParser.json);




const courses=[
    {id:1, name:"asad"},
    {id:2, name:"umair"},
    {id:3, name:"umar"},
    {id:4, name:"arslan"}
];

    const mymidleware=(req , res, next)=>{
        console.log("my first midleware asad");
        next();


    }
    // app.use(mymidleware);
   app.get('/', mymidleware, function (req, res) {
    res.send('hello world asad')
  });

  app.get('/api/courses/:id', function (req, res) {
       const course= courses.find(c => c.id=== parseInt( req.params.id));
       if(!course) res.status(404).send('the Course with given id is not found');
       res.send(course);
       
      // res.send(courses);
    });
     

    app.get('/api/creature/:id', function(req , res){

        Creature.findOne({
            _id:req.params.id,
        }).exec( function(error, result) {
            if(error){
                console.log("error", error);
            }else{
                console.log(result);
                res.json(result);
            }

        })

    });


    app.put('/api/creature/update/:id', function(req , res){
        Creature.findOneAndUpdate({
            _id:req.params.id,
            
        },
        {
            $set:
            {author:req.body.author}},
            {upsert:true},
            
            function(err, newCreature){
                if(err){
                    console.log('error', err);
                }else{
                    console.log('new Creature', newCreature);
                    res.send(newCreature);
                

            }
        } );

    });


    app.delete('/api/creatur/delete/:id', function(req, res){
  Creature.findOneAndRemove({
    _id:req.params.id,  
  }, function(error, result){
      if(error){
          console.log("error", error);
      }else{
          console.log("Succed");
          res.send(result);
      }

  })
    });
    app.post('/api/creature', function(req , res){


        var newCreature= new Creature(req.body);
        // newCreature.author=req.params.author;
        // newCreature.title=req.params.title;
        newCreature.save((err, result)=>{
            if(err){
                console.log('error');
            }else{
                res.json(result);
            }
        });

        // newCreature.author=req.params.author;
        // newCreature.title=req.params.title;


    });

    app.get('/api/creature', function(req, res){


        
        Creature.find((err, allcreature)=>{
            if(err){
                console.log("error");
            }else{
                // res.status(200).json("oh No")
                res.json({
               Creature:allcreature
                });
            }

        });

    });

    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke!')
      })


  


  const port= process.env.PORT|| 3000
  app.listen(port , () => console.log(`App listien on port ${port}`)) 