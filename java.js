// first part ======== done ===========
const allBtnSelect = document.querySelectorAll('.add-btn');
let count = 0;
for (const singleBtn of allBtnSelect) {
    singleBtn.addEventListener('click', function (e) {
        const cardName = e.target.parentNode.childNodes[1].innerText
        const cardPrice = e.target.parentNode.childNodes[3].childNodes[1].innerText
        const convertedCardPrice = parseInt(cardPrice)
        // --------------------- card Count --------------------------
        count = count+1;
        const cardCount = document.getElementById('cart-count');
        cardCount.innerText = count;
        // --------------------- --------------------------
        // second part ======= done ==========
       const rightSideCart = document.getElementById('cart-container');
       const cardAdd = rightSideCart.childNodes[1].innerText;
       const li = document.createElement('li');
       const p = document.createElement('p');
        p.innerText = cardName;
       const p2 = document.createElement('p');
       p2.innerText = convertedCardPrice
       li.appendChild(p);
       li.appendChild(p2);
       rightSideCart.childNodes[1].appendChild(li);

       // 3rd part ======== done ============
       const totalCost = document.getElementById('total-cost');
       const convertTotalCost = parseInt(totalCost.innerText);
       totalCost.innerText = convertTotalCost + convertedCardPrice;
       convertTotalCost.innerText = convertedCardPrice;

       // 3rd part ====================
        const grandTotal = document.getElementById('grand-total');
        const convertGrandTotal = parseInt(grandTotal.innerText)
        grandTotal.innerText = totalCost.innerText;
    })
}
