// project 5 
// url for  random data 
const urlApi = 'https://randomuser.me/api/?results=12&nat=us';
// creates a div for the cards
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
console.log('hi');
//--------------------------------------
// FETCH FUNCTIONS
//-------------------------------------
// creates a fetch function to gather data using the random user url. 
fetch('https://randomuser.me/api/?results=12&nat=us').then(response => response.json()) // uses the .then to parse  it into json so we can use the data 
	//.then(data => console.log(data.results)) // returns response 
    .then(data => {generateEmployee(data.results) 
        document.addEventListener('click', (e) => {
            if (e.target.closest('.card')) {
                const index = (e.target.closest('.card').id)
                PopUp(data.results, index)
            }
        })
   }
    )
//    ---------------------------
const modal = ` <div class="modal-container">
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
</div>`;

function generateEmployee(data) {
	let employeeCards = ""
	data.forEach((item, index) => {
		employeeCards += ` <div class="card" id ="${index}">
        <div class="card-img-container">
            <img class="card-img" src="${item.picture.thumbnail}"alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">
            ${item.name.first}   ${item.name.last}</h3>
            <p class="card-text">${item.email}</p>
            <p class="card-text cap"> ${item.location.city}   ${item.location.state}</p>
            <p class="modal-text">${item.cell}</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">${item.dob.date}</p>
        </div>
        </div>`
		gallery.innerHTML = employeeCards;
	})
}

function PopUp(employeeArray, index) {
   
   
   	const employee =  employeeArray[index]; let noTime = `${employee.dob.date}`
let reverseDate = `${noTime.charAt(5)}${noTime.charAt(6)}/${noTime.charAt(8)}${noTime.charAt(9)}/${noTime.charAt(2)}${noTime.charAt(3)}`


	const modal = ` <div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${employee.picture.medium}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${employee.name.first}  ${employee.name.last}</h3>
        <p class="modal-text">${employee.email}</p>
        <p class="modal-text cap">${employee.location.city} ${employee.location.state}</p>
        <hr>
        <p class="modal-text">${employee.cell}</p>
        <p class="modal-text">${employee.location.street}
        ${employee.location.name}</p>
        <p class="modal-text">${reverseDate}</p>
    </div>
</div>`;
	const window = document.createElement('div');
	document.body.appendChild(window);
    window.innerHTML = modal 

}