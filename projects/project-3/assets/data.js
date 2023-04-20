// Your data URL
const appToken = "iIzlse9urMQrDGf4vpW8gSbQ5"
const url = "https://data.cityofnewyork.us/resource/xeg4-ic28.json"


let localData = [] // Set up an empty object for our local data (`let` because it will change)
let mondaycount = 0;// byday object

// Do something with the data!
function parseData(data){
	// Go through each item in the object
	// Setup unique list of by day of week
	console.log(data);
	data.forEach(record => {
		
			//take a log of unique byday
			mondaycount = mondaycount + parseInt(record.monday_s_attendance);
		
	});
	console.log('monday count', mondaycount);
}


// Go get the data!
fetch(url+'?$limit=50000&$$app_token='+appToken)
	.then(response => response.json())
	.then(data => {
		localData = data // Save the data to our local variable, so we don’t have to re-request
		parseData(localData);
	});
