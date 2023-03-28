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
  function displayData(data){
    data.forEach(function(item, index){
    console.log(item, index);
    let newItem = document.createElement("div");
    newItem.innerHTML = `
      <div class="Detail">
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
      </div>
    `;
    let container = document.querySelector(".container");
    container.appendChild(newItem); 
    newItem.addEventListener('click', function(){
      newItem.classList.toggle("active");
    });   
  });
}

renderItems()

  