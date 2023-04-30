//findMatch: takes an array and string as an argument and returns a list of drivers names.
const findMatching = (driversArray, stringArg) => {
    return driversArray.filter(function (driver) {
        return driver.toUpperCase() === stringArg.toUpperCase()
    })
}


//fuzzyMatch: takes an array of drivers and a string as arguments and returns all the drivers whose names begin with the provided letters.

const fuzzyMatch = (driversArray, stringArg) => {
    return driversArray.filter(driver => {
        return driver.toLowerCase().substring(0, stringArg.length) === (stringArg.toLowerCase())
    })

}

//matchName: array of driver objects and a string. Each driver object has 2 properties: name and hometown. The function should return each element whose name property matches the provided string argument.
const matchName = (driversArray, stringArg) => {
    return driversArray.filter(function (driver) {
        return driver.name === stringArg;
    })
}