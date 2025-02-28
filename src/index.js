import express from 'express';
import cors from 'cors';

const app = express();


//MIDLLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.get('/rides', (req, res) => {
    res.status(200).json({message: "Deu tudo certo"});
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
