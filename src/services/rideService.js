import rideRepository from "../rideRepositories/rideRepository.js";

async function List(passenger_user_id, pickup_date, ride_id, driver_user_id, status){
    const rides = await rideRepository.List(passenger_user_id, pickup_date, ride_id, driver_user_id, status);
return rides;
}

async function Insert(passenger_user_id, pickup_address,
    pickup_latitude, pickup_longitude, dropoff_address) {

    const ride = await rideRepository.Insert(passenger_user_id, pickup_address,
        pickup_latitude, pickup_longitude, dropoff_address);

    return ride;
}


export default {List, Insert };
