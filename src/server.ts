import app from './app.js'

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';

app.listen(PORT, () =>  {
    console.log(`Server running on http://${DB_HOST}:${PORT}`)
});