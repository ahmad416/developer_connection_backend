const express = require('express');
const connectDB = require('./config/db');
const app = express();
// connecting to the mongodb
connectDB();
// init middleware
app.use(express.json({ extended: false}));
app.get('/', (req, res) => {
    res.send('API RUNNIMG');
});
// route files
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
// specifying the port & listening the app
const port  = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});
