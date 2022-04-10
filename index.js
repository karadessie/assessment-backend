const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar."]
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);    
});

app.get("/api/fortune", (req, res) => {
    const fortunes = ["Adventure can be real happiness.",
             "Believe it can be done",
             "Every flower blooms in its own sweet time.",
             "Fearless courage is the foundation of victory.",
             "Have a beautiful day."]
    let rndmIndex = Math.floor(Math.random() * fortunes.length);
    let rndmFortune = fortunes[rndmIndex];

    res.status(200).send(rndmFortune);
});

app.get("/api/questionAndAnswer", (req, res) => {
  const answers = ["Of Course!",
  "You Betcha!",
  "Abolutely!",
  "Any Day Now!"]
  let answersIndex = Math.floor(Math.random() * answers.length);
    let answersPhrase = answers[answersIndex];
  res.status(200).send(answersPhrase);   
});

app.get("/api/:id", (req, res) => {
    const newAnswer = req.query.id
    console.log(newAnswer)
    const answers = ["Of Course!",
    "You Betcha!",
    "Abolutely!",
    "Any Day Now!"]
    answers.push(newAnswer)
  res.status(200).send('Successfully added!')
  return
});

app.delete("/api/:id", (req, res) => {
  res.status(200).send("Successfully Deleted!");
  return
});

app.listen(4000, () => console.log("Server running on 4000"))
