const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
   res.send('this is from node js');
});

const users = [
   { name: 'Akhlak', passion: 'guiterist', occupation: 'Student', id: 1 },
   { name: 'Shaon', passion: 'Singer', occupation: 'Student', id: 2 },
   { name: 'Shiropa', passion: 'Good Girl', occupation: 'Student', id: 3 },
   { name: 'Esrat', passion: 'House Wife', occupation: 'Student', id: 4 }
];

app.get('/users', (req, res) => {
   const search = req.query.search;
   if (search) {
      const result = users.filter(user => user.name.toLowerCase().includes(search))
      res.send(result);
   }
   else {
      res.send(users);
   }
});

app.get('/users/:id', (req, res) => {
   const id = req.params.id - 1;
   const user = users[id]
   res.send(user)
});

app.post('/users', (req, res) => {
   const newUser = req.body;
   newUser.id = users.length + 1;
   users.push(newUser);
   console.log('hitting the post', req.body);
   // res.send(user)
   res.json(newUser);
})

app.listen(port, () => {
   console.log('the port is', port)
});