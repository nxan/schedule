const express = require('express');
const db = require('./config/db');

const app = express();

db.authenticate()
  .then(() => console.log('Database connected....'))
  .catch(err => console.log('Error' + err))

app.use(
    express.json({
        extended: true
    })
);

app.use('/v1/employee', require('./routes/api/employee.route'))
app.use('/v1/client', require('./routes/api/client.route'))
app.use('/v1/customers', require('./routes/api/customers.route'))
app.use('/v1/service', require('./routes/api/service.route'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));