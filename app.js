const { connectDatabase } = require("./database/database");

const app = require("express")();

connectDatabase()

app.get("/",(req,res)=>{
    req.json({
        status:"200",
        message:"helo"
    })

})

app.listen(4000,()=>{

console.log("Node js started at port 4000")

})