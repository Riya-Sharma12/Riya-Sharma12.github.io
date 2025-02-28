const data = [
    {name : 'Riya' , city:'Meerut', email :'riya@gmail.com'},
    {name : 'Khushi' , city:'Delhi', email :'khushi@gmail.com'},
    {name : 'Shubh' , city:'Mumbai', email :'shubh@gmail.com'},
    {name : 'Aarohi' , city:'Noida', email :'aarohi@gmail.com'},
];

const root = document.getElementById('parent');

data.forEach((ele)=>{
    const newCard = document.createElement('div');
    newCard.addEventListener("click", () => {
        newCard.style.backgroundColor = chngBgDiv(); 
    });
    
    newCard.className = "class";
    newCard.innerHTML = `
    <h2>${ele.name}</h2>
    <h3>${ele.city}</h3>
    <p>${ele.email}</p>
    `;
    root.appendChild(newCard);
})

const chngBg = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};


const chngBgDiv = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`; 
};
