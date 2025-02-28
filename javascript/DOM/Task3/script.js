const data = [
    {email :'riya@gmail.com',name : 'Riya' , city:'Meerut' },
    {email :'khushi@gmail.com',name : 'Khushi' , city:'Delhi' },
    {email :'shubh@gmail.com',name : 'Shubh' , city:'Mumbai' },
    {email :'aarohi@gmail.com',name : 'Aarohi' , city:'Noida' },
];

const cities = data.map((ele)=> ele.cities);


const parent = document.getElementById('parent')
const showData = (newData)=>{
    parent.innerHTML="";
    newData.forEach((ele)=>{
     const card = document.createElement('div');
     card.className = "class";
     card.innerHTML = `
     <h2>${ele.name}</h2>
     <h3>${ele.city}</h3>
     <button onClick="deleteCard(${ele.email})">Delete</button>
     `
     parent.appendChild(card);
    });
};

const deleteCard = (e,eleEmail)=>{
    const index = data.findIndex((ele)> ele.email == eleEmail);
    data.splice(index, 1);
    showData(data);
 }
 

function submitted(e){
    e.preventDefault();
    // console.log(e.target.email.value);
    // console.log(e.target.name.value);
    // console.log(e.target.city.value);

    const isEmailExists = data.some((ele)=>{
        return ele.email === e.target.email.value;
    });
    if(!isEmailExists){
        alert("email already exists");
        return;
    }

    const newElement = {
        name : e.target.name.value,
        city : e.target.city.value,
        email : e.taget.email.value
    };
    data.push(newElement);
    showData(data);
}