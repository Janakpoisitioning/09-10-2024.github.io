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
      "90019302002":"6A70E24B23F6AB1178A66C2BABF30D713893E4922EED4E395A08471387D18D86"

"90019302005":"6404646464F28920E6927D0DF1B383B01ADE623E8BE56DC87EF04C5D762D720B"

"90019302007":"68C45997737073735C7B0080589BD49A4C6D0EF58E65EFF8481AA5797A07D7C9"

"90019403036":"71B04C03057A6EC6DC414C94207A3B361D41CF560C14D20098F7419DAF7954A1",


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
