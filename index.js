const express = require("express");
const app = express();
const port = 3001;

const persons = [
  {
    name: "Arto Hellas",
    number: "040-1235",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "234-4567",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "678-3458",
    id: 3
  },
  {
    name: "Mary Loo",
    number: "649-3865",
    id: 4
  }
];

app.get("/", (req, res) => res.send("Hello World"));

app.get("/api/persons", (req, res) => res.json(persons));

app.get("/info", (req, res) => res.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
`));

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find(person => person.id == Number(id));

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }

})

app.listen(port, () => console.log(`Listening on port ${port}!`));
