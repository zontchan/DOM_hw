
import setGoblin from "./setGoblin";
import goGoblin from "./goGoblin";
try {
//setGoblin();
//goGoblin();

    const fields = Array.from(document.querySelectorAll('.field'));
    const wins = document.querySelector('.wins-count');
    const loses = document.querySelector('.loses-count');
    fields.forEach((field) => {
        field.addEventListener('click', (e) => {
          if(e.target.classList.contains('goblin')){
              wins.innerText++;
              if(wins.innerText === '5'){
                  window.alert('Вы выиграли')
                  wins.innerText = 0;
                  loses.innerText = 0;
              }
          }
          else{
              loses.innerText++;
              if(loses.innerText === '5'){
                  window.alert('Вы проиграли')
                  wins.innerText = 0;
                  loses.innerText = 0;
              }
          }
        })
    })
}
catch (e) {
    console.log(e);
}