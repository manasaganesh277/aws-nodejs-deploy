const express = require('express');
const app = express();

app.get('/api/get',(req,res)=>{
    res.send({message:"welcome to motus"})
})

app.listen(3001, () => {
    console.log("listening on port 3001");
}
);

