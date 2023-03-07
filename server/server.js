import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();

// middleware

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about our stack
const port = 8080;

// HTTP get request
app.get('/', (req, res) => {
    res.status(201).json('Home get request')
})

// router api
// To load the middleware function, call app.use()

app.use('/api', router)

// start server valid when only valid connection

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`running port on http://localhost:${port}`);
        })

    } catch (error) {
        console.log("can't connect to the server");
    }
}).catch(error => {
    console.log('invalid data connection')
})

