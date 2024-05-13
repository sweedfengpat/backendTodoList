const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

let tasks = [];

// Get all tasks
app.get('/tasks', (req, res) => {
  //send all tasks with id
  res.send(tasks.map((task, index) => ({ id: index, task })));

});

// Create a new task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).send('Task added successfully');
});

// Update a task by index
app.put('/tasks/:index', (req, res) => {
  const { index } = req.params;
  const { task } = req.body;
  tasks[index] = task;
  res.send('Task updated successfully');
});

// Delete a task by index
app.delete('/tasks/:index', (req, res) => {
  const { index } = req.params;
  tasks.splice(index, 1);
  res.send('Task deleted successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
