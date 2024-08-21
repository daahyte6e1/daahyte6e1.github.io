import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import PostgresPool from './utils/PostgresPool.js'
import Claim from './callbacks/claim.js'
import GetUserInfo from './callbacks/getUserInfo.js'


const app = express();
const port = 8080;

const pool = new PostgresPool();
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));
app.post('/api/claim',  Claim({pool}));
app.post('/api/get-user-info',  GetUserInfo({pool}));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
