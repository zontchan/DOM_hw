import setGoblin from "./setGoblin";

export default function goGoblin (){
    setInterval(() => {
        const g = document.querySelector('.goblin');
        g.classList.remove('goblin');
        setGoblin();
    }, 500);
}