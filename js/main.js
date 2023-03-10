const area = document.querySelector('.area');
const obj = document.querySelector('.click-obj');

const sizes = {
    areaHeight: area.clientHeight,
    areaWidth: area.clientWidth,
    objHeight: obj.clientHeight,
    objWidth: obj.clientWidth
};

let maxHeight = sizes.areaHeight - sizes.objHeight;
let maxWidth = sizes.areaWidth - sizes.objWidth;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const changePosition = () => {
    obj.style.left = getRandomInt(maxWidth) + 'px';
    obj.style.top = getRandomInt(maxHeight) + 'px';
};

obj.addEventListener('click', changePosition);