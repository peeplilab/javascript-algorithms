let tempConvert =  {
    celsiusToF : function(t) {
        console.log(Math.ceil((9*t + 160) / 5))
    },
    FToCelsius : function(t) {
        console.log((Math.ceil(t - 32) / 9) * 5)
    }
}
tempConvert.celsiusToF(60)
tempConvert.FToCelsius(45)