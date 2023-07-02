const countValue = document.querySelector('#counter')
console.log(countValue);

const increment = () => {

    //get the value from UI
    let value = parseInt(countValue.innerText);

    //update the value of UI
     value = value + 1;
     countValue.innerText = value;
};

const decrement = () => {

    //get the value from UI
    let value = parseInt(countValue.innerText);

    //update the value of UI
    value = value - 1;
    countValue.innerText = value;

};