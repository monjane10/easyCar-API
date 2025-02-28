import rideRepository from "../rideRepositories/rideRepository.js";

async function List(){
    const rides = await rideRepository.List();
return rides;
}


export default {List};
