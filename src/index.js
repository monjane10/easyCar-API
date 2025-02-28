import express from 'express';
import cors from 'cors';
import controllerRide from "./controllers/ridesController.js";

const app = express();


//MIDLLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.get('/rides',controllerRide.List);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
