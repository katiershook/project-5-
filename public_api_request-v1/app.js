// project 5 
// url for  random data 
const urlApi = 'https://randomuser.me/api/?results=12&nat=us';
// creates a div for the cards
const gallery = document.createElement('div');
// assigns a class of card
gallery.class = 'card';
gallery.Id = 'modal';
//gallery.innerHTML = cardDiv;
// appends this bad boy to the body
document.body.appendChild(gallery);
// creates  a variable with provided html 
const searchBarHtml = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`
//creates a div
var searchBar = document.createElement('div');
//assigns a class
searchBar.class = "search-container";
// assigns the var searchBarHtml to the search bar divs inner HTML
searchBar.innerHTML = searchBarHtml;
// appens that bad boy to the body of the  page
document.body.appendChild(searchBar);
// creates a variable using the provided  html for the module
const module = ` <div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
        <h3 id="name" class="modal-name cap">name</h3>
        <p class="modal-text">email</p>
        <p class="modal-text cap">city</p>
        <hr>
        <p class="modal-text">(555) 555-5555</p>
        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        <p class="modal-text">Birthday: 10/21/2015</p>
    </div>
</div>`
console.log('hi');
//--------------------------------------
// FETCH FUNCTIONS
//-------------------------------------
// creates a fetch function to gather data using the random user url. 
fetch('https://randomuser.me/api/?results=12&nat=us').then(response => response.json()) // uses the .then to parse  it into json so we can use the data 
	//.then(data => console.log(data.results)) // returns response 
	.then(data => generateEmployee(data.results)) // passes the generateEmployee ()
//    ---------------------------
//   //HELPER FUNCTIONS
//  ----------------------------------
function generateEmployee(data) {
	// creates variable and maps over the returned data. Interpolates the  random data we want to plug into the cards by 
	//${item.picture.thumbnail}. I plug in  thumbnail, location, ect bc that it was the data returned to the console 
	const employees = data.map(item => `
     <div class="card">
     <div class="card-img-container">
         <img class="card-img" src="${item.picture.thumbnail}"alt="profile picture">
     </div>
     <div class="card-info-container">
         <h3 id="name" class="card-name cap">
         ${item.name.first}   ${item.name.last}</h3>
         <p class="card-text">${item.email}</p>
         <p class="card-text cap"> ${item.location.city}   ${item.location.state}</p>
     </div>
     </div>`)
	// takes the innerHTML of the gallery  div
	gallery.innerHTML = employees
}

function popUpWindow() {
	document.querySelector('employees').addEventListener('click', function() {
		document.querySelector('.module').addClass('open')
	})
}