const accesKey  = "QMwRT961MbszTFIwOUC1x1JNAjvWlll4RZvBUEv8DQg"

const formelemnt = document.querySelector('form')
const inputElement = document.getElementById('Search-input')
const searchResult = document.querySelector('.search-results')
const showmore = document.getElementById('show-more-button')

console.log(formelemnt);

console.log(inputElement.value);

console.log(searchResult);

console.log(showmore);
let inputData = ""
let page = 1

async function searchImages(){
    inputData  = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesKey}`
    const response = await fetch(url)
    const data = await response.json()
    const results = data.results;

    if(page===1){
        searchResult.innerHTML = ""
    }
    results.map((result)=>{
        const imagewraaper = document.createElement('div');
        imagewraaper.classList.add('search-result') ;
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description; 



        imagewraaper.appendChild(image);
        imagewraaper.appendChild(imageLink);
        searchResult.appendChild(imagewraaper);

        page++;
        if(page>1){
            showmore.style.display = "block";
        }
    })
};


formelemnt.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();

})

showmore.addEventListener("click",()=>{

    searchImages();

})