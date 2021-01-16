const express = require('express');
const { getPostIts, getPostIt } = require('./controllers/showCtrl');
const showCtrl = require('./controllers/showCtrl');
const app = express();
const port = 7777;
const baseUrl = '/api/post-its';

app.use(express.json());

// Endpoints
app.get(baseUrl, showCtrl.getPostIts);
app.put(baseUrl, showCtrl.createPostIt);
app.post(`${baseUrl}/:id`, showCtrl.updatePostIt);
app.delete(`${baseUrl}/:id`, showCtrl.deletePostIt);

app.listen(port, () => { console.log(`Listening on port ${port}`)});