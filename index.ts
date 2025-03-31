import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';


dotenv.config();


const app : Express = express();

const port : number = parseInt(process.env.PORT ?? '3000');

app.get('/ping', (req : Request, res : Response) => {
    if (req.method == 'GET') {
        res.send(req.headers);
    }
    else {
        res.status(404).send(null);
    }
});

app.all('*', (req: Request, res: Response) => {
    res.status(403).send(null);
});


app.listen(port, () => {
    console.log(`Service tourne sur le lien: http://localhost:${port}`);
});
