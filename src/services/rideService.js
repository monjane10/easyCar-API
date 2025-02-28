import rideRepository from "../rideRepositories/rideRepository.js";

async function List(passenger_user_id, pickup_date, ride_id, driver_user_id, status){
    const rides = await rideRepository.List(passenger_user_id, pickup_date, ride_id, driver_user_id, status);
return rides;
}


export default {List};
