const custumers = ['microsoft', 'ibm', 'cisco', 'vodafone']

custumers.forEach(buscarImagem)

function buscarImagem (custumer, index) {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/logo?name=' + custumer,
    headers: { 'X-Api-Key': ''},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        let logo = document.getElementById('custumer_' + index)
        logo.setAttribute('src', result[0].image)
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
  });
}

const container = document.getElementById("container")
const images = document.querySelectorAll("#container img")

let idx = 0

function carousel() {
  
  idx++;

  if(idx > images.length -1){
    idx = 0;
  }

  container.style.transform = `translateY(${-idx * 100}px)`
}

setInterval(carousel, 2000)
