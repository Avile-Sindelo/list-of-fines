import 'dotenv/config';

import express from 'express';
import { engine } from 'express-handlebars';

import Fines from './controllers/fines.controller.js'


const app = express();

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', Fines.allFines); // still to import the necessary controller-module
// app.post('/fine', getSpecificFine); // still to import the necessary controller-module


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `Application running on port ${PORT}`
    );
});