const addBtn = document.getElementsByClassName('add-btn');
for (const btn of addBtn) {
    btn.addEventListener('click', function(e){
        const cardName = e.target.parentNode.childNodes[1].innerText;
    const cardPrice = e.target.parentNode.childNodes[3].childNodes[1].innerText
    const convertPrice = parseInt(cardPrice);
        // first step============== done ===========
    const cardLi = onlyIdCollection('cart-container')
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = cardName;
    const p2 = document.createElement('p');
    p2.innerText = convertPrice;
    li.appendChild(p);
    li.appendChild(p2);
    cardLi.childNodes[1].appendChild(li);
    const totalCost = getId('total-cost',convertPrice);
    // const grandTotalCost = grandTotal('grand-total',convertPrice);
        const grandTotal = document.getElementById('grand-total');
        const grand = grandTotal.childNodes[0];
        console.log(typeof grand);
    })
}

function onlyIdCollection(id){
    const idCoolection = document.getElementById(id);
    const result2 = idCoolection
    return result2
}
function getId(id,value){
    const idSeach = document.getElementById(id).innerText;
    const convertNumber = parseInt(idSeach);
    const sum = convertNumber + value;
    document.getElementById(id).innerText = sum;
}
// function grandTotal(id,value){
//     getId(id,value);  
// }
function innerTextValue(elementId){
    const element = document.getElementById(elementId).innerText;
    return element; 
}

// ==== provlem part start ========================================
function grandTotalCost(e){
    if(e === 'Bus'){
        // console.log('bus ok');
    }
    else if(e === 'Train'){
        // console.log('train ok aca');
    }
    else if(e === 'Flight'){
        // console.log('flight already ok');
    }
}