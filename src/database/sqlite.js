import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

function execute(command, params, method = "all") {
    return new Promise((resolve, reject) => {
        db[method](command, params, (error, result) => {
            if (error)
                reject(error)
            else
                resolve(result);
        });
    });
}

const db = new SQLite.Database("./src/database/banco.db", SQLite.OPEN_READWRITE, (error) =>{
    if (error)
        return console.log("Erro ao conectar a base de dados:" + error.message)
    else
    return console.log("Base de dados conectada com sucesso!")
});


export {db, execute}