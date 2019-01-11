const express = require('express');
const router = express.Router();

var data = require('../data/data.json');



router.get('/discography', (req, res)=>{

    albumData = data.discography;
    var html = '';
    var count = 0;

    albumData.forEach((item)=>{
        html += `
            <li>
                <h1>${item.album}</h1>
                <img src='/images/discography/${item.shortname}.${item.type}'>

                <p>${description}</p>
            </li>
        `
    })

    res.send(`<ul>${html}</ul>`);

})

module.exports = router;