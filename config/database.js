import pgPromise from 'pg-promise';

const pgp = pgPromise();

const db = pgp(process.env.DATABASE_URL);

console.log('Database results: ', db);

export default db;