const express = require('express');
const app = express();

app.get('/api/get',(req,res)=>{
    res.send({message:"welcome to motus"})
})
app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"manasa",
            age:22,
            contact:12254
        },env:process.env.NAME
    })
});

app.listen(3001, () => {
    console.log("listening on port 3001");
}
);

