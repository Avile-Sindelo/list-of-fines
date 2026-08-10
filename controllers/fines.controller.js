import FinesModel from '../models/fines.model.js';

async function allFines(req, res){
    // get all the fines from the database
    const fines = await FinesModel.getAllFines();
    //render a view - home page
    res.render('home', { fines })
}

async function specificFine(req, res) {
    // extract the title from the request body
    const { title } = req.body;
    console.log(req.body);

    //get the fines for th specified title from the database
    const titleFines = await FinesModel.getSpecificFines(title);
    // console.log(titleFines);
    
    //render a view - home page
    res.render('title-fines', { titleFines })    
}


export default {
    allFines,
    specificFine
}