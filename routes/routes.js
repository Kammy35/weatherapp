const {Router} = require('express');
const router = Router();

const getWeather = require('../lib/getWeather');

router.get('/', (req, res) => {
    res.render('index')


//let location = req.body.location;//
    // console.log(location);//
//let country = req.body.country;//
    // console.log(country);//
// let data = await getWeather(location, country);//
    //console.log(data.list)//

});


router.post('/', async(req, res) => {
    let location = req.body.location;
    let country = req.body.country;

    let data = await getWeather(location, country);
    
    // let temp = data.list[0].main.temp;
    // let pressure = data.list[0].main.pressure;
    // let name = data.list[0].name;
    //console.log(data)//
    // res.render('index', {data: {temp, pressure, name}});
    

    console.log(data)
   
    if(data.list[0]){ 
        let temp = data.list[0].main.temp;
        let pressure = data.list[0].main.pressure;
        let name = data.list[0].name;
        res.render('index', {data: {temp, pressure, name}});
    }
    else {
        console.log('test2')
        let error = "you have entered incorrect country";
        res.render('index', {error : error})
    }
});

module.exports = router;