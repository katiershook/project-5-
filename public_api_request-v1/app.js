const html = //`search.className = 'search-container'
`<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`
//creates a div
var searchBar = document.createElement('div');
//assigns an id
searchBar.class = "search-container";
// assigns the var html to the search bar divs inner HTML
searchBar.innerHTML = html;
// appens that bad boy to the page
document.body.appendChild(searchBar);
console.log('hi');