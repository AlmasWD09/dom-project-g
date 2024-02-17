let count = 0;
const addBtn = document.getElementsByClassName('add-btn');

for (const btn of addBtn) {
    btn.addEventListener('click', function(e){
     count = count + 1;
     setInnerText('cart-count',count);

     const cardName = e.target.parentNode.childNodes[1].innerText;
     const cardPrice = e.target.parentNode.childNodes[3].childNodes[1].innerText
     const convertPrice = parseInt(cardPrice);
    //  console.log(cardName, convertPrice);
    // ====== aitoku ok aca =================
    const selectPaceContainer = document.getElementById('selected-place-container');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = cardName;
    const p2 = document.createElement('p');
    p2.innerText = convertPrice;
    li.appendChild(p);
    li.appendChild(p2);
    selectPaceContainer.appendChild(li)

    const buget = document.getElementById('budget').innerText;
    const convertBuget = parseInt(buget);
    if(convertBuget - convertPrice < 0){
        alert('Your larget number');
        return;
    }
    document.getElementById('budget').innerText = convertBuget - convertPrice;
    
    // ====== aitoku ok aca =================
 
    totalCost('total-cost',convertPrice)
    grandTotalCost('grand-total',convertPrice);
    })
}

function totalCost(id,value){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertTotalCost = parseInt(totalCost);
    const sum = convertTotalCost + value;
    setInnerText(id,sum);
}
function grandTotalCost(category){
    // console.log(category);
    const totalCost = document.getElementById('total-cost').innerText;
    const convertTotalCost = parseInt(totalCost);
    if(category == 'bus'){
        setInnerText('grand-total',convertTotalCost+100);
    }
    else if(category == 'train'){
        setInnerText('grand-total',convertTotalCost-200);
    }
    else if(category == 'flight'){
        setInnerText('grand-total',convertTotalCost+500);
    }
    else{
        setInnerText('grand-total',convertTotalCost); 
    }
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}