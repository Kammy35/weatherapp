const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request);

const getWeather = async (location, country) => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/find?q=${location},${country}&APPID=${process.env.APPID}`,
       json: true
        
    })
    return data.body;
}
// console.log(data)//
// const getWeather = ()=> {
//     request({
//         uri: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
//         json: true
//     }, (err, res) => {
//             if(err) throw err;
//             console.log(res.body);
//     });
// }

module.exports = getWeather;
