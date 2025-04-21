const emoji=document.querySelector("#emoji");
const more_emojis=["😃","😄","😂","😆","😃","😊","😔","😉","😌","😎","🥲","🥸","😘","😳","😏","🤪","🤬","🙃"]

emoji.addEventListener('mouseover',()=>
{
emoji.innerHTML=more_emojis[Math.floor(Math.random()*more_emojis.length)];
});