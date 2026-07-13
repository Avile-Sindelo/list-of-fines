import FinesModel from '../models/fines.model.js';

async function allFines(req, res){
    // get all the fines from the database
    const fines = await FinesModel.getAllFines();
    //render a view - home page
    res.render('home', { fines })
}

async function specificFine(title) {
    // get the fines for a specific title
    //render a view - home page
}


export default {
    allFines,
    specificFine
}