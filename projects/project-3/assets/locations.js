// Your data URL
const appToken = "iIzlse9urMQrDGf4vpW8gSbQ5"
const url = "https://data.cityofnewyork.us/resource/xeg4-ic28.json"


let localData = [] // Set up an empty object for our local data (`let` because it will change)
let manhattanSum = 0;
let bronxSum = 0;
let statenislandSum = 0;
let brooklynsum = 0;
let queenssum = 0;
// let sportsplayed = 0;

const container = document.getElementById('container');

const records = document.getElementById('records');



// Do something with the data!
function parseData(data){
	// Go through each item in the object
	// Setup unique list of by location
	console.log(data);
	data.forEach(record => {
		console.log(record)
			//take a log of unique bylocation
			manhattanSum += parseInt(record.attendance_sum);
			bronxSum += parseInt(record.attendance_sum);
			statenIslandSum += parseInt(record.attendance_sum);
			brooklynSum += parseInt(record.attendance_sum);
			queensSum += parseInt(record.attendance_sum);
		
	});
  console.log('Manhattan Attendance Sum:', manhattanSum);
  console.log('Bronx Attendance Sum:', bronxSum);
  console.log('Staten Island Attendance Sum:', statenIslandSum);
  console.log('Brooklyn Attendance Sum:', brooklynSum);
  console.log('Queens Attendance Sum:', queensSum);




			let row = document.createElement("div");
			row.classList.add('row');
			row.innerHTML=`
			<div class="row">
      <div class="manhattan">${manhattanSum}</div>
      <div class="bronx">${bronxSum}</div>
      <div class="staten-island">${statenIslandSum}</div>
      <div class="brooklyn">${brooklynSum}</div>
      <div class="queens">${queensSum}</div>
    </div>
			`
			row.dataset.sports = record.sports_played;
			row.dataset.date = record.week_start_date.slice(0,10);
			row.dataset.blocation = record.borough_location;
			row.dataset.plocation = record.park_location;

			


			row.addEventListener('click', function(){
				let sportinfo = row.dataset.sports;
				let dateinfo = row.dataset.date;
				let blocationinfo = row.dataset.blocation
				let plocationinfo = row.dataset.plocation
				console.log(sportinfo);
				container.innerHTML = `<sport>${sportinfo}</sport>
				<date>${dateinfo}</date> <blocation>${blocationinfo}</blocation> <plocation>${plocationinfo}</plocation>`;
			});
			records.appendChild(row);
			

		
	};




// Go get the data!
fetch(url+'?$limit=50000&$$app_token='+appToken)
	.then(response => response.json())
	.then(data => {
		localData = data // Save the data to our local variable, so we don’t have to re-request
		parseData(localData);
	});
