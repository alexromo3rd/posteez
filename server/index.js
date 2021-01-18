const express = require('express');
const { getPostIts, createPostIt, updatePostIt, deletePostIt } = require('./controllers/showCtrl');
const app = express();
const port = 7777;
const baseUrl = '/api/post-its';

app.use(express.json());

// Endpoints
app.get(baseUrl, getPostIts);
app.put(baseUrl, createPostIt);
app.post(`${baseUrl}/:id`, updatePostIt);
app.delete(`${baseUrl}/:id`, deletePostIt);

app.listen(port, () => { console.log(`Listening on port ${port}`)});