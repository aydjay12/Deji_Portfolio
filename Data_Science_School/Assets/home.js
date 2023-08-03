var button = document.getElementById('button');
var col1 = document.getElementById('col-1');
var col2 = document.getElementById('col-2');
var col3 = document.getElementById('col-3');
var col4 = document.getElementById('col-4');
var col5 = document.getElementById('col-5');
var col6 = document.getElementById('col-6');
var col7 = document.getElementById('col-7');
var col8 = document.getElementById('col-8');
var arrow = document.getElementById('arrow');
var others = document.getElementById('others');

function buttonClick(){
    col1.style.display = 'grid';
    col2.style.display = 'grid';
    col3.style.display = 'grid';
    col4.style.display = 'grid';
    col5.style.display = 'grid';
    col6.style.display = 'grid';
    col7.style.display = 'grid';
    col8.style.display = 'grid';
    button.style.display = 'none';
    arrow.style.display = 'block';
    others.style.display = 'flex';
}
function arrowClick(){
    col1.style.display = 'none';
    col2.style.display = 'none';
    col3.style.display = 'none';
    col4.style.display = 'none';
    col5.style.display = 'none';
    col6.style.display = 'none';
    col7.style.display = 'none';
    col8.style.display = 'none';
    button.style.display = 'flex';
    arrow.style.display = 'none';
    others.style.display = 'none';
}

button.addEventListener("click", buttonClick);
arrow.addEventListener("click", arrowClick);