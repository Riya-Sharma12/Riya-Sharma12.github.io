const getData = () =>{
    const pr = fetch("https://dummyjson.com/recipes/search?q=Margherita");
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            showCards(data.recipes);
        });
    });
};

const root = document.getElementById('card-container')


const showCards = (data) =>{
    root.innerHTML=""
    data.forEach(ele => {
        const newElement = document.createElement('div')
        newElement.className="card"
        newElement.innerHTML=
        `
        <h4>${ele.name}</h4>
        <img src="${ele.image}"
        <p>${ele.cuisine}</p>
        `
        root.appendChild(newElement);
    });
}

const handleSearch = (e) =>{
    getData(e.target.value)
}