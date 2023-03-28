  let container = document.getElementById('container');

  const renderItems = (data) => {
    const lampList = document.getElementById("con");
  //fetch JSON data

  fetch('./lamp.json')
  .then(response => response.json())
  .then(data => {
//passes the data to the function above
    console.log(data)
    displayData(data);
    //renders the items in reverse order
    })
    .catch(error => console.error(error));
}

function displayData(data){

  data.forEach( function(item, index){
    console.log(item, index);
    let newItem = document.createElement("div");
    newItem.innerHTML = `
        <div class="img ${item.class}"><img src="img ${item.img}.png"></div>
          <div class="Details">
            <div class="img">
              <img src="img/${item.img}.png">
            </div>`;

    container.appendChild(newItem);
    })
  };

  //         <div class="Info">          
  //          <div class="Name">${item.Name}</div>
  //           <div class="Price"><span class="label">Price</span> <br> ${item.Price}</div>
  //           <div class="Brand"><span class="label">Brand</span> <br> ${item.Brand}</div>
  //           <div class="Dimensions"><span class="label">Dimensions</span> <br> ${item.Dimensions}</div>
  //           <div class="Designers"><span class="label">Designers</span> <br> ${item.Designers}</div>
  //           <div class="Colors"><span class="label">Colors</span> <br> ${item.Colors}</div>
  //          <div class="Materials"><span class="label">Materials</span> <br> ${item.Materials}</div>`;
  //     container.appendChild(newItem);    
      
  //     newItem.addEventListener('click', function(){
  //       console.log('click');
  //       newItem.classList.toggle('active');
  //     });
  //   });
  // }