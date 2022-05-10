//import cheerio
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';
let url = 'https://www.sparknotes.com/nofear/shakespeare/hamlet/act-1-scene-3/';
//make a fetch request to the url
const response = await fetch(url);
const body = await response.text();
console.log(body);
const $ = cheerio.load(body);
const script = $('.noFear_audio').html();
console.log(script);
//write to file
fs.writeFile("hamlet.html", script, (err) => {
    if (err)
        throw err;
    console.log('The file has been saved!');
});
