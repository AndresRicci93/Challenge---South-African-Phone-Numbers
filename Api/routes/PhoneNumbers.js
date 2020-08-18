import express from 'express';
import fs from 'fs';
import path from 'path';


var content = fs.readFileSync('./correct.json');
var jsonContent = JSON.parse(content);

const router = express.Router();
const __dirname = path.resolve();

router.get('/phoneNumbers', (req, res) => {
    console.log(jsonContent);
    res.send(jsonContent);

});

export default router;