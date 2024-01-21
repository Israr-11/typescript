import express, {Request, Response} from "express"

const app=express()

app.get("/", (req:Request, res:Response)=>{
    res.send("Hello Israr, welcome!")
})

const PORT=process.env.port || 8080;
app.listen(PORT, ()=>{
    console.log("Listening at port", PORT)
})