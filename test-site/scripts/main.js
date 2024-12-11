// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}




// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// /*
// 这里的所有内容都是注释。
// */
// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");


// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if(!myName) {
//         setUserName();
//       } else {
//         localStorage.setItem('name', myName);
//         myHeading.innerHTML = 'Mozilla is cool, ' + myName;
//       }
//     }

//   if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozilla is cool, ${storedName}`;
//   }

//   myButton.onclick = function () {
//     setUserName();
//   };
  

