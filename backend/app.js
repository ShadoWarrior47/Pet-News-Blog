const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

const newsRoutes = require('./routes/news');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', newsRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
