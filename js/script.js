console.log("Running");
const btnElement = document.querySelector('.btn');
btnElement.addEventListener('mouseover',(e)=>{
    console.log(e.pageX);
    const x = (e.pageX - btnElement.offsetLeft);
    const y = (e.pageY - btnElement.offsetTop);
    btnElement.style.setProperty("--xPos",x+"px");
    btnElement.style.setProperty("--yPos",y+"px");
});