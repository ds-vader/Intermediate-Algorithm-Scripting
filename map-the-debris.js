/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  //value for calculation orbitalPeriod
  const GM = 398600.4418;
  const EarthRadius = 6367.4447;

  //loop for get all element in input array
  for (let i = 0; i < arr.length; i++) {
    //check if input value is liquid
    if (typeof arr[i].avgAlt == "number") {
      //save name of object
      var objName = arr[i].name;

     // Calculate the Orbital period value
      var earth = EarthRadius + arr[i].avgAlt;
      var period = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));

      //rewrite object
      arr[i] = {name: objName, orbitalPeriod: period};
    }else{
      console.log("Invalid value")
    }
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);