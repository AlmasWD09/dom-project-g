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
    // const grandTotalCost = getId('grand-total',convertPrice);
    const grandTotalCost = grandTotal('grand-total',convertPrice);
    // console.log( grandTotalCost);
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
function grandTotal(id,value){
    getId(id,value);  
}
function innerTextValue(elementId){
    const element = document.getElementById(elementId).innerText;
    return element; 
}

function grandTotalCost(event){
    const stringText = document.getElementById('busBtn');
    const result3 = stringText.innerText;
    const stringTextResult = parseInt(result3.slice(1))
    const stringTextOne = event.target.children[0].innerText;
    console.log(stringTextResult, stringTextOne);

    const total = innerTextValue('grand-total');
    let covertTotal = parseInt(total);
    console.log(covertTotal);
    let amount = 0;
    if('Bus' === stringTextOne){
         amount = stringTextResult + covertTotal;
        // covertTotal  = covertTotal + 100;
        console.log(amount);
    }
    else if('Train' === stringText){
       covertTotal  = covertTotal - 200;
        console.log('train');
    }
    else if('Flight' === stringText){
        covertTotal  = covertTotal + 500;
        console.log('flait');
    }
    else{
        console.log('amra logic bozi ni');
    }
    document.getElementById('grand-total').innerText = amount;
}