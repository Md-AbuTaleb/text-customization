

const text = document.getElementById('text');
const align = document.querySelectorAll('.align');
const range = document.getElementById('range');
const color = document.getElementById('color');
const fw = document.getElementById('fw');

const h1 = document.querySelector('h1');


text.onkeyup = () => {
    if(text.value == ''){
        text.style.border = '1px solid red';
    }else{
        text.style.border = '1px solid blue';      
    }
    
    h1.innerHTML = text.value;
    h1.style.textTransform= 'capitalize';
}

align.forEach(item => {
    item.onchange = () => {
        h1.style.textAlign = item.value;
    }
});

range.oninput = () => {
    h1.style.fontSize = range.value + 'px';
}

color.oninput = () => {
    h1.style.color = color.value;
}

fw.onchange = () => {
    h1.style.fontFamily = fw.value;
}
console.log(color);
