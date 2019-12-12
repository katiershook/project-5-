
const urlApi =  'https://randomuser.me/api/?results=12&nat=us' ;

const html = //`search.className = 'search-container'
`<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`
//creates a div
var searchBar = document.createElement('div');
//assigns a class
searchBar.class = "search-container";
// assigns the var html to the search bar divs inner HTML
searchBar.innerHTML = html;
// appens that bad boy to the page
document.body.appendChild(searchBar);


const cardDiv = `
<div class="card">
<div class="card-img-container">
    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">first last</h3>
    <p class="card-text">email</p>
    <p class="card-text cap">city, state</p>
</div>
</div>`


const gallery = document.createElement('div');
gallery.class ="card";
gallery.innerHTML = cardDiv;
document.body.appendChild(gallery);

//--------------------------------------
// FETCH FUNCTIONS
 fetch('https://randomuser.me/api/?results=12&nat=us')
     .then(response => response.json())
     .then(data => console.log(data));
     //.then(data => generateEmployee(date.message))
  

// // //   // ---------------------------
//   //HELPER FUNCTIONS
//  // 
//  function generateEmployee(data){
// const imageHtml = `<img src =`${data}` alt >
