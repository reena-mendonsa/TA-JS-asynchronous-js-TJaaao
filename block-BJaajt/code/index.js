let input = document.querySelector('input');
let ul = document.querySelector('ul');


function displayUI(data) {
  ul.innerText = '';
  let li = document.createElement('li');
  let img = document.createElement('img');
  img.classList.add('imgClass');
  img.src = data.avatar_url;
  let name = document.createElement('p');
  name.classList.add('name');
  name.innerText = data.name;

  let userName = document.createElement('p');
  userName.classList.add('userName');
  userName.innerText = data.login;

  let followers = document.createElement('li');
  followers.classList.add('followers');
  followers.innerText = `Followers ${data.followers}`;
  let following = document.createElement('li');
  following.classList.add('following');
  following.innerText = `Following ${data.following}`;

  //followers

  let flwrs = new XMLHttpRequest();
  flwrs.open('GET', `https://api.github.com/users/${data.login}/followers`);

  flwrs.onload = function () {
    var five = JSON.parse(flwrs.response);
    five.innerHTML = '';
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('maindiv');
    mainDiv.innerText = "Followers:"
    for (let i = 0; i < 5; i++) {
      let div = document.createElement('div');
      div.classList.add('img-box');
      let img = document.createElement('img');
      img.classList.add('full-width');
      img.src = five[i].avatar_url;
      div.append(img);
      mainDiv.append(div);
      li.append(mainDiv);
    }
  };
  flwrs.send();

  // following

   let flwing = new XMLHttpRequest();
   flwing.open('GET', `https://api.github.com/users/${data.login}/following`);

   flwing.onload = function () {
     var five = JSON.parse(flwing.response);
     five.innerHTML = '';
     let mainDiv = document.createElement('div');
     mainDiv.classList.add('maindiv');
     mainDiv.innerText = "Following:"
     for (let i = 0; i < 5; i++) {
       let div = document.createElement('div');
       div.classList.add('img-box');
       let img = document.createElement('img');
       img.classList.add('full-width');
       img.src = five[i].avatar_url;
       div.append(img);
       mainDiv.append(div)
       li.append(mainDiv);
     }
   };
   flwing.send();

  li.append(img, name, userName, followers, following);
  ul.append(li);
  
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.onerror = function () {
      console.log('Something went wrong...');
    };
    xhr.send();
    event.target.value = '';
  }
}

input.addEventListener('keyup', handleChange);

// cat 

let cat = document.querySelector('.cat');
let button = document.querySelector('button');


button.addEventListener('click', () => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.unsplash.com/photos/random/?query=cat&client_id=cjfXT17JE8gPZDkrqs-R1TqLOMUr_5oSlbjW-j_F79A;'
  );
  
  
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    cat.src = imageData.urls.small;
  };
  xhr.send();
});