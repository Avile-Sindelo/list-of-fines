import FinesModel from '../models/fines.model.js';

async function allFines(req, res){
    // get all the fines from the database
    const fines = await FinesModel.getAllFines();

    const keywords = extractKeywords(fines);
    
    //render a view - home page
    res.render('home', { fines, keywords });
}

async function specificFine(req, res) {
    try{
        const keywords = extractKeywords(await FinesModel.getAllFines());
        const title = req.body.option;
        //get the fines for th specified title from the database
        const fines = await FinesModel.getSpecificFines(title);

        res.render('home', { fines, keywords })    
    } catch(error) {
        console.log(error); 
    }
    
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