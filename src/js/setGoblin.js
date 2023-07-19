import getRandomNumber from "./getRandomNumber";
const fields = Array.from(document.querySelectorAll('.field'));
export default function setGoblin () {
    try {
        fields[getRandomNumber(0, 15)].classList.add('goblin');
    }
    catch (e) {
        console.log(e);
    }
}