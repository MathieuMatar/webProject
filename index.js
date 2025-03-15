const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serviceRoutes = require('./routes/serviceRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const clientRoutes = require('./routes/clientRoutes');
const contactRoutes = require('./routes/contactRoutes');

const db = require('./config/db');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/services', serviceRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});