//setup container element
let container = document.getElementById("container");


fetch('./assets/emojis.json')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => console.log(error));

function displayData( data ){
  data.forEach( function(item, index){
    // console.log(item, index);
    let newItem = document.createElement("div");
    newItem.classList.add("icon");
    newItem.innerHTML = `
      <div class="phrase">${item.sample}</div>
      <div class="category">${item.category}</div>
      <div class="emoji">${item.emoji}</div>`;
    container.appendChild(newItem);    
  });
}
