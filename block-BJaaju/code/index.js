let allImages = document.querySelector('.allImages');
let input = document.querySelector('input');

function handleImage(event) {
  if (event.keyCode === 13) {
    allImages.innerHTML = '';
    let xhr = new XMLHttpRequest();
    let url = `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=cjfXT17JE8gPZDkrqs-R1TqLOMUr_5oSlbjW-j_F79A`;
    xhr.open('GET', url);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);

      for (let i = 0; i < userData.results.length; i++) {
        allImages.innerHTML += `<img src="${userData.results[i].urls.small}"/>`;
      }
    };
    xhr.send();
    input.value = '';
  }
}

input.addEventListener('keyup', handleImage);