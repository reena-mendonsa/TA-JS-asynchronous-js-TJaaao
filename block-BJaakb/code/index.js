 
  let allImages = document.querySelector('.allImages');
  let input = document.querySelector('input');
 

function fetch(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        resolve(JSON.parse(xhr.response));
      }
      xhr.onerror = () => {
        reject("Something went wrong");
      }
      xhr.send();
    })
  }
  
  let data = fetch(`https://api.github.com/users/reena-mendonsa`).then((data) => {
    console.log(data.name);
  }).catch((error) => {
    alert("Check Your internet connection")
  });
  
 
  
  function handleImage(event) {
    if (event.keyCode === 13) {
      allImages.innerHTML = '';
      function fetch(url) {
        let xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
          xhr.open('GET', url);
          xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
          };
          xhr.onerror = () => {
            reject('Something went wrong');
          };
          xhr.send();
          input.value = '';
        });
      }
  
      fetch(
        `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=cjfXT17JE8gPZDkrqs-R1TqLOMUr_5oSlbjW-j_F79A`
      )
        .then((data) => {
          for (let i = 0; i < data.results.length; i++) {
            allImages.innerHTML += `<img src="${data.results[i].urls.small}"/>`;
          }
        })
        .catch((error) => {
          error('Check Your Internet Connection');
        });
    }
  }
  input.addEventListener('keyup', handleImage);
  