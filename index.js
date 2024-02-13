

// get elements by their ID
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function () {
    // get the search input value
    const searchTerm = searchInput.value;
    // do something with the search term (e.g. redirect to a search results page)
    console.log(`Searching for "${searchTerm}"...`);

    var text1 = document.getElementById("textField");
    text1.style.display = "block";
    const rawData = `{
        "90019305150":"D8FA8C69F4364EB96152EC0E58F4519B855C0F54A98C0F66F7D2A8519549D03E",
        "90019305094":"1EAC0E18FFF796B91F4FF70329F57D992FCF4A69FE391BA50D4EFEB61F6989E9"
    }`;
    let jsonData = JSON.parse(rawData);
    console.log(searchInput.innerHTML);
    console.log(jsonData);
    let result = jsonData[parseInt(searchTerm)];
    console.log(result);
    let final_result = "The activation code is " + result;
    text1.innerHTML = final_result;
});

function displayText() {

}

