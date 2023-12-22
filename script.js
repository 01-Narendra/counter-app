const countValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countValue.innerText);
    value = value+1;
    countValue.innerText = value;
}

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value-1;
    countValue.innerText = value;
} 

// if you want to remove below lines then add button attribute onclick with specific function istead of id
const neg = document.querySelector('#dec');
neg.addEventListener("click", decrement);

const pos = document.querySelector('#inc');
pos.addEventListener("click", increment);