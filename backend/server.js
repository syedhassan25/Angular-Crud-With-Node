import express  from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import bodyparser from 'body-parser';

import issue  from './models/issue';

const app  = express();
const router = express.Router();
app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/issuesdb',{ useNewUrlParser: true });
const connecton = mongoose.connection;

connecton.once('open' , () => {
        console.log('Connection Established Successfull');
})
app.use('/',router);

router.route('/issue').get((req,res) => {
    issue.find((err,issue) => {
            if(err)
                console.log(err);
             else
                 res.json(issue);
              
    })
})

router.route('/issue/:id').get((req,res) => {
    issue.findById(req.params.id,(err,issue) => {
        if(err)
        console.log(err);
         else
        res.json(issue);   
    })
})

router.route('/issue/add').post((req,res)=>{

    console.log(req.body);
    let issued = new issue(req.body);
    issued.save().then(issued => {
        res.status(200).json({'issue':'Add Successfully'});
    }).catch(issue => {
        res.status(400).send('Failed To Create');
    })
})

router.route('/issue/update/:id').post((req,res) => {
    issue.findById(req.params.id, (err,issue) => {
        if(!issue)
          return next(new Error('Could Not Load Document'));
          else
           issue.title = req.body.title;
           issue.responsible = req.body.responsible;
           issue.description = req.body.description;
           issue.severity = req.body.severity;
           issue.status = req.body.status;
           issue.save().then(issue => {
               res.json(issue);
           }).catch(issue => {
               res.status(400).send('Update Failed');
           })
    });
})

router.route('/issue/delete/:id').get((req,res) => {
    issue.findByIdAndRemove({_id:req.params.id}, (err,issue)=>{
            if(err)
                res.json(err);
             else
                 res.json('remove Successfully');
              
    })
})

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

app.listen(4000,()=> console.log("Express server running"))