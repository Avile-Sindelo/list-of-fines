import Database from '../config/database.js'; 

async function getAllFines() {
    const allFine = await Database.any(`SELECT * FROM fines`);
    
    return allFine;
}

async function getSpecificFines(title) {
    const specificFines = await Database.any(`
        SELECT * FROM fines WHERE title=$1
        `, [title]);

        return specificFines;
}

export default {
    getAllFines,
    getSpecificFines
}