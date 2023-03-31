const express = require("express")
const mongoose = require("mongoose")

app = express();


const PORT = process.env.PORT || 7000


mongoose.connect("mongodb+srv://reza:a19941994m@mongo.yt6yw4d.mongodb.net/Exam")


const QuizSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    Sid:{
        type: String,
        required: true
    }

    
       
})

const QuizModel  = mongoose.model("Quiz", QuizSchema)

app.get("/", (req,res,next) => {

    const S1 = QuizModel({
        name : "Mohammad Reza Goodarzvand Chegini",
        Sid : "300354368"
    })

    QuizModel.insertMany(S1)

    res.send("<h2> Document add </h2>")

})


app.listen(PORT, () => {
    console.log("Server is running " + PORT);
})