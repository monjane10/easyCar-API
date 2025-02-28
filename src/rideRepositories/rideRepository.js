import {execute} from "../database/sqlite.js";



async function List(){
    let sql = `select * 
    from rides`;
    const rides = await execute(sql) ;
     rides;
}


export default {List};
