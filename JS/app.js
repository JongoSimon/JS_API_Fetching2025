//* More API INFO = https://www.geeksforgeeks.org/what-is-an-api/
//* JSON = Javascript object Notation
//? LINK = 

//! Fetching
//* using this method will handle all the Asynchronous parts of async/await/promises

//? Fetching the information from the link below.
let url = `https://swapi.info/api/people/1`
let counter = 1
let currentChar;
let button = document.querySelector("#showChar")
let chartPlacement = document.querySelector(".characterTraits")
button.addEventListener("click", pasteDataToPage);


// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         currentChar = data;
//         console.log(currentChar);
//     })
//     .catch(error => {
//         console.log(error);
//     })

async function fetchData() {
    let url = `https://swapi.info/api/people/1`
   await fetch(url)
             .then(res => res.json())
             .then(data => {

        //? we are able to parse a data but it is an object

           console.log(data.eye_color, data.birth_year);


        currentChar = data;
      
    })
    .catch(error => {
        console.log(error);
    })
}


async function pasteDataToPage() {
    //? This is going to reference the fetch function above.
    await fetchData();

    console.log(currentChar);

    counter++

    let paragraph = document.createElement("p");
    paragraph.innerText = currentChar.name;

    chartPlacement.append(paragraph);

}
