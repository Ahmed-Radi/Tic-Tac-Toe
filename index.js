let turn = 'x';
let title = document.querySelector('.game__title');
let squires = [];

const newGame = (id1,id2,id3) => {
    title.innerHTML = `<span>${squires[id1]}</span> winner`;
    title.getElementsByTagName('span')[0].style.color = "#d1ed31";
    document.getElementById(`item${id1}`).style.background = '#000';
    document.getElementById(`item${id2}`).style.background = '#000';
    document.getElementById(`item${id3}`).style.background = '#000';
    setInterval(() => {title.innerHTML += '.'}, 1000)
    setTimeout(() => {location.reload()}, 3500)
}

const winner = () => {
    for(let counter = 1; counter < 10; counter++) {
        squires[counter] = document.getElementById(`item${counter}`).innerHTML;
    }
    if(squires[1] === squires[2] && squires[2] === squires[3] && squires[1] !== '') { newGame(1,2,3) }
    if(squires[4] === squires[5] && squires[5] === squires[6] && squires[4] !== '') { newGame(4,5,6) }
    if(squires[7] === squires[8] && squires[8] === squires[9] && squires[7] !== '') { newGame(7,8,9) }

    if(squires[1] === squires[4] && squires[4] === squires[7] && squires[1] !== '') { newGame(1,4,7) }
    if(squires[2] === squires[5] && squires[5] === squires[8] && squires[2] !== '') { newGame(2,5,8) }
    if(squires[3] === squires[6] && squires[6] === squires[9] && squires[3] !== '') { newGame(3,6,9) }

    if(squires[1] === squires[5] && squires[5] === squires[9] && squires[1] !== '') { newGame(1,5,9) }
    if(squires[3] === squires[5] && squires[5] === squires[7] && squires[3] !== '') { newGame(3,5,7) }
}

const game = (id) => {
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML === '') {
        element.innerHTML= 'x';
        turn = 'o';
        title.innerHTML= 'o';
    }
    else if(turn === 'o' && element.innerHTML === '') {
        element.innerHTML= 'o';
        turn = 'x';
        title.innerHTML= 'x';
    }
    winner();
}