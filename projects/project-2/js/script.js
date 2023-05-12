let container = document.getElementById('container');

function renderItems() {
  const lampList = document.getElementById("con");

  fetch('./lamp.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      displayData(data);
    })
    .catch(error => console.error(error));
}

let colorArray = ['Orange', 'Gray', 'Teal', 'Sienna', 'Peru']

function displayData(data){
  data.forEach(function(item, index){
    console.log(item.Colors, index);
    let newItem = document.createElement("div");
    newItem.classList.add("lamp");
    newItem.innerHTML = `
      <img src="${item.Image}">
      <div class="Name">${item.Name}</div>

      <div class="details inactive">
        
        <div class="Name">${item.Name}</div>
        <div class="Price">
          <span class="label">Price</span> <br> ${item.Price}
        </div>
        <div class="Brand">
          <span class="label">Brand</span> <br> ${item.Brand}
        </div>
        <div class="Dimensions">
          <span class="label">Dimensions</span> <br> ${item.Dimensions}
        </div>
        <div class="Designers">
          <span class="label">Designers</span> <br> ${item.Designers}
        </div>
        <div class="Colors">
          <span class="label">Colors</span> <br> ${item.Colors}
        </div>
        <div class="Materials">
          <span class="label">Materials</span> <br> ${item.Materials}
        </div>
        <div class="bkgColor"></div>
      </div>
    `;
    let container = document.querySelector("#container");
    container.appendChild(newItem);  
  });

  let lamps = document.querySelectorAll(".lamp");
  let details = document.querySelectorAll(".details");
  let bkgColorDivs = document.querySelectorAll(".bkgColor");

  for(let i=0;i<lamps.length; i++){
    lamps[i].addEventListener('click', function(){
      details[i].classList.toggle("inactive");
      
      for(let j=0; j<colorArray.length; j++){
        if(data[i].Colors.includes(colorArray[j])){
          bkgColorDivs[i].style.backgroundColor = colorArray[j].toLowerCase();
          console.log(colorArray[j].toLowerCase());
        }
      }

    });   
  }
}



renderItems();
