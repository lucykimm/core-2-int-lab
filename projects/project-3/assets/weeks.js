// Your data URL
const appToken = "iIzlse9urMQrDGf4vpW8gSbQ5"
const url = "https://data.cityofnewyork.us/resource/xeg4-ic28.json"


let localData = [] // Set up an empty object for our local data (`let` because it will change)
let mondaytotalcount = 0;
let tuesdaytotalcount = 0;
let wednesdaytotalcount = 0;
let thursdaytotalcount = 0;
let fridaytotalcount = 0;
let saturdaytotalcount = 0;
let sundaytotalcount = 0;
let sportsplayed = 0;

const container = document.getElementById('container');

const records = document.getElementById('records');



// Do something with the data!
function parseData(data){
	// Go through each item in the object
	// Setup unique list of by day of week
	console.log(data);
	data.forEach(record => {
		console.log(record)
			//take a log of unique byday
			mondaytotalcount += record.monday_s_attendance;
			tuesdaytotalcount += record.tuesday_s_attendance;
			wednesdaytotalcount += record.wednesday_s_attendance;
			thursdaytotalcount += record.thursday_s_attendance;
			fridaytotalcount += record.friday_s_attendance;
			saturdaytotalcount += record.saturday_s_attendance;
			sundaytotalcount += record.sunday_s_attendance;
		
	});
	console.log('mondaycount', mondaytotalcount);
	console.log('tuesdaycount', tuesdaytotalcount);
	console.log('wednesdaycount', wednesdaytotalcount);
	console.log('thursdaycount', thursdaytotalcount);
	console.log('fridaycount', fridaytotalcount);
	console.log('saturdaycount', saturdaytotalcount);
	console.log('sundaycount', sundaytotalcount);





	data.forEach(record => {
		console.log(record)
			//take a log of unique byday
			mondaycount = record.monday_s_attendance;
			tuesdaycount = record.tuesday_s_attendance;
			wednesdaycount = record.wednesday_s_attendance;
			thursdaycount = record.thursday_s_attendance;
			fridaycount = record.friday_s_attendance;
			saturdaycount = record.saturday_s_attendance;
			sundaycount = record.sunday_s_attendance;

			let row = document.createElement("div");
			row.classList.add('row');
			row.innerHTML=`
			<div class="monday">${mondaycount}</div>
			<div class="tuesday">${tuesdaycount}</div>
			<div class="wednesday">${wednesdaycount}</div>
			<div class="thursday">${thursdaycount}</div>
			<div class="friday">${fridaycount}</div>
			<div class="saturday">${saturdaycount}</div>
			<div class="sunday">${sundaycount}</div>
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
			

		
	});




}



// Go get the data!
fetch(url+'?$limit=50000&$$app_token='+appToken)
	.then(response => response.json())
	.then(data => {
		localData = data // Save the data to our local variable, so we don’t have to re-request
		parseData(localData);
	});
