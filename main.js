const colors = ['#FADBD8 ', '#16a085', '#1abc9c', '#2ecc71','#27ae60', '#3498db', '#2980b9', '#9b59b6', '#8e44ad', '#34495e', '#2c3e50', '#f1c40f', '#f39c12', '#e67e22', '#d35400', '#e74c3c', '#c0392b', '#ecf0f1', '#bdc3c7', '#95a5a6', ' #7f8c8d', '#239B56', '#239B56', '#E74C3C'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}
btn.addEventListener("click", ()=>{
    const randomNumebr = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumebr];
    color.textContent = colors[randomNumebr];

});


