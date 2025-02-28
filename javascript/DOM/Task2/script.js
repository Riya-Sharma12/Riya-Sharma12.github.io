const data = [
    {name : 'Riya' , city:'Meerut', email :'riya@gmail.com'},
    {name : 'Khushi' , city:'Delhi', email :'khushi@gmail.com'},
    {name : 'Shubh' , city:'Mumbai', email :'shubh@gmail.com'},
    {name : 'Aarohi' , city:'Noida', email :'aarohi@gmail.com'},
];

const parent = document.getElementById('parent')
const showData = (newData)=>{
    parent.innerHTML="";
    newData.forEach((ele)=>{
     const card = document.createElement('div');
     card.className = "class";
     card.innerHTML = `
     <h2>${ele.name}</h2>
     <h3>${ele.city}</h3>
     <button onClick="deleteCard(event)">Delete</button>
     `
     parent.appendChild(card);
    });
};
// showData();

const deleteCard = (e)=>{
   e.target.parentElement.remove();
}

const display = (e) =>{
    const selectedCity =  e.target.value;
    const newData = data.filter((e)=>e.city===selectedCity
    )
    showData(newData)
}

const select = document.getElementById('select');
select.addEventListener('change' , display);
