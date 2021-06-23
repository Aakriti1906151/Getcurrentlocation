const express=require('express');
const app=express();
const path=require('path');
const router=express.Router();
app.use(express.static('location'));
router.get('/',(req,res)=>{
    res.send("location detect ")
});
router.get('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,"/location/location.html"))
});

app.use('/',router);

app.listen(3000,()=>
{
    console.log("the server strted on port",3000);
})

