const hex = document.querySelector('.hex');
const buttons = document.querySelector(".generator");



buttons.addEventListener("click", generators)


function generators(){
    const hexcolor = Math.random().toString(16).substring(2,8);
    console.log(hexcolor);
    document.body.style.backgroundColor = "#" + hexcolor;
    hex.innerText = "#" + hexcolor;
}






generators()








let color = Math.random().toString(16); // 16 defines base of 16 which also means 0 to 9 number and 10 to 25 it resembles alphabets that is a to f.
