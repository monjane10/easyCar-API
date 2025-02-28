import rideService from "../services/rideService";

async function List(req, res){

    try{
        const rides = await rideService.List();
        res.status(200).json(rides);
    } catch(error){
        res.status(500).json(error);
    }

 
}


export default {List};
