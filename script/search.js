

const input = document.getElementById("search-term-input");
const ul = document.querySelector("#search-item-list");

//create an array of list elements
const populateListElements = (data) =>{
    return data.map(datum =>{
        let li = document.createElement("li");
        li.setAttribute("class", "item");
        li.textContent = datum;
        return li;
    });
};

//display list items or elements according to search term
const inflateUnorderedList = (data) =>{
    let listElements = populateListElements(data);
    input.addEventListener("keyup", (e) =>{
        let searchTerm = e.target.value.trim();
        listElements.forEach(element =>{
            if(searchTerm && element.textContent.toLowerCase()
                .indexOf(searchTerm.toLowerCase()) === 0){
                element.style.display = "block";
                ul.style.display = "block";
            }else{
                element.style.display = "none";
            }
        });
    });
    //append list elements to the unordered list element
    ul.append(... listElements);
};

//inflate search outputs when the search input field is focused upon
input.onfocus = (e) => ul.style.display = (e.target.value.length > 0) ? "block" : "none";

ul.onclick = (e) => {
    if (e.target && e.target.matches("li.item")) {
        input.value = e.target.textContent;
    }
    ul.style.display = "none";
};

