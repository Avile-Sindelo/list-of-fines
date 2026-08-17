import FinesModel from '../models/fines.model.js';

async function allFines(req, res){
    // get all the fines from the database
    const fines = await FinesModel.getAllFines();

    const keywords = extractKeywords(fines);
    
    //render a view - home page
    res.render('home', { fines, keywords });
}

async function specificFine(req, res) {
    // extract the title from the request body
    const { title } = req.body;
    console.log('Request.Body: ', req.body);

    //get the fines for th specified title from the database
    const titleFines = await FinesModel.getSpecificFines(title);
    // console.log(titleFines);
    
    //render a view - home page
    res.render('title-fines', { titleFines })    
}

function extractKeywords(fines){
    const keywords = [];
    
    //extract the keyword from each element
    fines.forEach(element => {
        //trim away the duplicate keywords
        if(!keywords.includes(element.key_word)){
            
            keywords.push(element.key_word);
        } 
    });

  
    return keywords;
}


export default {
    allFines,
    specificFine
}