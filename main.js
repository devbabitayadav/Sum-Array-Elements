let number = [1,8,7,5,4,10,98,2,45,3];

const Addnumber = number.reduce((p,c) => {
    return p + c;
},0);

document.write(`<h2>Total Sum is :  ` + + Addnumber);