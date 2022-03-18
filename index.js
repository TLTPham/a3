import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('src'));

let port = 3001;

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));