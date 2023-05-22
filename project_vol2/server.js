import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import subjectsRouter from './routes/subjects.js';
import departmentRouter from './routes/departments.js';

import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.mongooConnectionUrl);

const app = express();

app.use(express.urlencoded({ extended: true }));  // to bring data inserted in a form to the body so it will not print undefined


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');



app.listen(process.env.port, () => {
  //  console.log('Started an application on port http://localhost: ' + PORT);
    console.log(`Started an application on port http://localhost: ${process.env.port}`);
});


app.use('/subjects', subjectsRouter);
app.use('/departments', departmentRouter);
app.use('/all_students', allStudentsRputer);