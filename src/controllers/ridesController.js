import rideService from "../services/rideService";

function List(req, res){

    try{
        const rides = rideService.List();
        res.status(200).json(rides);
    } catch(error){
        res.status(500).json(error);
    }

 
}


export default {List};
