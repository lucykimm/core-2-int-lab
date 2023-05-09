// Your data URL
const appToken = "iIzlse9urMQrDGf4vpW8gSbQ5"
const url = "https://data.cityofnewyork.us/resource/xeg4-ic28.json"


let localData = [] // Set up an empty object for our local data (`let` because it will change)
// let manhattanSum = 0;
// let bronxSum = 0;
// let statenislandSum = 0;
// let brooklynsum = 0;
// let queenssum = 0;
// let sportsplayed = 0;

const container = document.getElementById('container');

const records = document.getElementById('records');

const manhattanColumn =  document.getElementById('manhattan')
const bronxColumn =  document.getElementById('bronx')
const statenColumn =  document.getElementById('statenisland')
const brooklynColumn =  document.getElementById('brooklyn')
const queensColumn =  document.getElementById('queens')

// Do something with the data!
function parseData(data){
	// Go through each item in the object
	// Setup unique list of by location
	console.log(data);
	data.forEach(record => {
		console.log(record)
			//take a log of unique bylocation
		const currentRecord = document.createElement('div');
		currentRecord.innerHTML = `
		<p> ${record.attendance_sum}</p>
		`

		currentRecord.dataset.sports = record.sports_played;
		currentRecord.dataset.date = record.week_start_date.slice(0,10);
		currentRecord.dataset.blocation = record.borough_location;
		currentRecord.dataset.plocation = record.park_location;

		currentRecord.addEventListener('click', function(){
			let sportinfo = currentRecord.dataset.sports;
			let dateinfo = currentRecord.dataset.date;
			let blocationinfo = currentRecord.dataset.blocation
			let plocationinfo = currentRecord.dataset.plocation
			console.log(sportinfo);
			container.innerHTML = `<sport>${sportinfo}</sport>
			<date>${dateinfo}</date> <blocation>${blocationinfo}</blocation> <plocation>${plocationinfo}</plocation>`;
		});

		currentRecord.classList.add('location-sum')
		
		let borough = record.borough_location
		if (borough === 'Manhattan') {
			manhattanColumn.appendChild(currentRecord);
		} else if (borough === 'Bronx') {
			bronxColumn.appendChild(currentRecord);
		} else if (borough === 'Staten Island') {
			statenColumn.appendChild(currentRecord);
		} else if (borough === 'Brooklyn') {
			brooklynColumn.appendChild(currentRecord);
		} else if (borough === 'Queens') {
			queensColumn.appendChild(currentRecord);
		}
		

		
	});
 
	};




// Go get the data!
fetch(url+'?$limit=50000&$$app_token='+appToken)
	.then(response => response.json())
	.then(data => {
		localData = data // Save the data to our local variable, so we don’t have to re-request
		parseData(localData);
	});
