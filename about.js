
let number1 = () => { 
    let a = document.getElementById('num1').value;
    return parseInt(a);
};
let number2 = () => {
    let a = document.getElementById('num2').value;
    return parseInt(a);
};

function ketQuaTong () {
    document.getElementById('ketqua').innerHTML = number1() + number2();
}
function ketQuaNhan () {
    document.getElementById('ketqua').innerHTML = number1() * number2();
}
function ketQuaChia () {
    document.getElementById('ketqua').innerHTML = (number2()!=0 ? number1()/number2() : "Phép tính không thực hiện được");
}
function ketQuaTru () {
    document.getElementById('ketqua').innerHTML = number1() - number2();
}

