const {log: _} = console;

// Q51: Write a function to convert a string to title case:

// Provided test cases:
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"

function titleCase(str){
  if(typeof str !== "string"){
    throw new Error("titleCase() function requires input of type \"string\" only.")
  }

  // method1: using for loop:
  // let strArr = str.toLowerCase().split(" ");
  // for(let i=0; i<strArr.length; i++){
  //   strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  // }
  // return strArr.join(" ");


  // method2: using map() method:
  return str.toLowerCase().split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  // method3: using forEach() method: 
  
}

_(titleCase("I'm a little tea pot"))
_(titleCase("sHoRt AnD sToUt"))
_(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
// _(titleCase(true))

// Q52: Write a function which can convert the time input given in 12 hours format to 24 hours format:

// convertTo24HrsFormat("12:10AM")    //00:10
// convertTo24HrsFormat("5:00AM")     //05:00
// convertTo24HrsFormat("12:33PM")    //12:33
// convertTo24HrsFormat("01:59PM")    //13:59
// convertTo24HrsFormat("11:8PM")     //23:08
// convertTo24HrsFormat("10:02PM")    //22:02

function convertTo24HrsFormat(timeStr){
  let [hours, mins] = timeStr.toLowerCase().split(":");
  if(timeStr.endsWith("AM")){
     hours = hours === "12" ? "0" : hours;
  }

  if(timeStr.endsWith("PM")){
     hours = hours === "12" ? hours : (+hours + 12).toString();
  }

  let time = `${hours.padStart(2,0)}:${mins.slice(0, -2).padStart(2,0)}`

  return `Converted ${timeStr} to ${time}`;
}


_(convertTo24HrsFormat("12:10AM"))    
_(convertTo24HrsFormat("5:00AM") )    
_(convertTo24HrsFormat("12:33PM"))    
_(convertTo24HrsFormat("01:59PM"))    
_(convertTo24HrsFormat("11:8PM") )    
_(convertTo24HrsFormat("10:02PM"))   

// Q53: Map data to frontend format. the main element is location key and we need to map all data to it. We will have 5 objects in the end:

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
]

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  }, 
  {
    dataValues: {
      config_key: 200,
    },
  }, 
]

//[{config_key: 100, location_key: 32, autoAssign: 1},{config_key: 100, location_key: 22, autoAssign: 1},{config_key: 100, location_key: 11, autoAssign: 1},{config_key: 100, location_key: 41, autoAssign: 1},{config_key: 100, location_key: 42, autoAssign: 1}
// [{config_key: 200, location_key: 32, autoAssign: 1},{config_key: 200, location_key: 22, autoAssign: 1},{config_key: 200, location_key: 11, autoAssign: 1},{config_key: 200, location_key: 41, autoAssign: 1},{config_key: 200, location_key: 42, autoAssign: 1},]

const result = loc.map((loc_el, index)=>{
  return loc_el.location_key.map(key=>{
    return {
      config_key: bulkConfig[index].dataValues.config_key, 
      location_key: key, 
      autoAssign: loc_el.autoassign
    }
  })
}).reduce((arr, acc)=>arr.concat(acc), [])


_("Mapped data: ", result)


// Q54 onwards in script8.js