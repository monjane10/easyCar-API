import express from 'express';
import cors from 'cors';
import controllerRide from "./controllers/ridesController.js";

const app = express();


//MIDLLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.get('/rides',controllerRide.List);
app.post('/rides',controllerRide.Insert);
app.delete("/rides/:ride_id", controllerRide.Delete);
app.get("/rides/:ride_id", controllerRide.ListDetail);

app.put("/rides/:ride_id/finish", controllerRide.Finish);
app.get("/rides/drivers/:driver_user_id", controllerRide.ListForDriver);
app.put("/rides/:ride_id/accept", controllerRide.Accept);
app.put("/rides/:ride_id/cancel", controllerRide.Cancel);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
