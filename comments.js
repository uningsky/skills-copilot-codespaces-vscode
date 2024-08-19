// Create web server
const express = require('express');
const app = express();
// Create a router
const router = express.Router();
// Add router to server
app.use(router);
// Add a route to the router
router.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Start the server listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});