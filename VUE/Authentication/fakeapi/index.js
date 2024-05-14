const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('./users.json'); 
const cors = require('cors')

// Create an Express app
const app = express();
app.use(express.json())
app.use(cors())

// Secret key to sign JWT
const secretKey = 'your_secret_key_here';
// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;


  // Replace this with your database query to fetch user data
  const user = users.find((u) => u.username === username && u.password === password);


  if (user) {
    // Generate JWT
    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });

    console.log(token)
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});
// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));