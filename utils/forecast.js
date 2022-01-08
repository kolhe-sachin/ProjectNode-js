const request = require('request')
const chalk = require('chalk')
const forecast = (latitude,longitude,callback)=>{
const url = 'http://api.weatherstack.com/current?access_key=da83180f9ff0edad5216e1f38d08ee04&query='+ latitude +','+ longitude 

request({url:url,json:true},(error,response)=>{
    if(error){
        callback(chalk.red('Check network connection!'),undefined)
    }else if(response.body.error){
        callback(chalk.red('Check coordinates of location!'),undefined)
    }else if(response === ''){
        callback('You must provide address',undefined);
    }else{
        callback(undefined,
           'It is currently ' + response.body.current.temperature + ' degree out and its ' + response.body.current.weather_descriptions + ' outside '
        )
    }
})
}

module.exports = forecast