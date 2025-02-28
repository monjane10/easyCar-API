import rideService from "../services/rideService.js";

async function List(req, res){

    try{

        const passenger_user_id = req.query.passenger_user_id;
        const pickup_date = req.query.pickup_date;
        const ride_id = req.ride_id
        const driver_user_id = req.driver_user_id
        const status = req.status
        const rides = await rideService.List(passenger_user_id, pickup_date, ride_id, driver_user_id, status);
        res.status(200).json(rides);
    } catch(error){
        res.status(500).json(error);
    }

 
}

async function Insert (req, res){

    try {
        const passenger_user_id = req.body.passenger_user_id;
        const pickup_address = req.body.pickup_address;
        const pickup_latitude = req.body.pickup_latitude;
        const pickup_longitude = req.body.pickup_longitude;
        const dropoff_address = req.body.dropoff_address;

        const rides = await rideService.Insert(passenger_user_id, pickup_address,
            pickup_latitude, pickup_longitude, dropoff_address);

        res.status(201).json(rides);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Delete(req, res) {

    try {
        const ride_id = req.params.ride_id;

        const ride = await rideService.Delete(ride_id);

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Finish(req, res) {

    try {
        const ride_id = req.params.ride_id;
        const passenger_user_id = req.body.passenger_user_id;

        const ride = await rideService.Finish(ride_id, passenger_user_id);

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function ListForDriver(req, res) {

    try {

        const driver_user_id = req.params.driver_user_id;

        const rides = await rideService.ListForDriver(driver_user_id);

        res.status(200).json(rides);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function ListDetail(req, res) {

    try {
        const ride_id = req.params.ride_id;

        const rides = await rideService.List(null, null, ride_id, null, null);

        res.status(200).json(rides[0]);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Accept(req, res) {

    try {
        const ride_id = req.params.ride_id;
        const driver_user_id = req.body.driver_user_id;

        const ride = await rideService.Accept(ride_id, driver_user_id);

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Cancel(req, res) {

    try {
        const ride_id = req.params.ride_id;

        const ride = await rideService.Cancel(ride_id);

        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { List, Insert, Delete, Finish, ListForDriver, ListDetail, Accept, Cancel };
