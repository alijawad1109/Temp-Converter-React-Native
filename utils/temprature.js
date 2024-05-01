const UNITS={
    celcius:"°C",
    farahneit:"°F"
}
function convertTempratureTo(temprature,unitTo){
    if(unitTo === UNITS.celcius){
        return (temprature -  32) / 1.8
    }else if(unitTo === UNITS.farahneit){
        return temprature  * 1.8 + 32;
    }else{
        throw new Error("Invalid unit")
    }
}
function getOppositeUnits(unit){
    return unit === UNITS.celcius ? UNITS.farahneit : UNITS.celcius
}
function isTempratureIncrease(temprature,unit){
    if(unit === UNITS.celcius){
        return temprature <=0 ;
    }else if(unit === UNITS.farahneit){
        return temprature <= 32
    }else{
        throw new Error("Invalid unit")
    }
}
export {UNITS,convertTempratureTo ,getOppositeUnits ,isTempratureIncrease }