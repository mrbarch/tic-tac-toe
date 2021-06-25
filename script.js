// let parent = document.querySelector('.game')
// let text = document.querySelector('.text')
// let currentPlayer = 'X'
//
// for (let i = 0; i < 9; i++) {
//     let btn = document.createElement('button')
//     parent.appendChild(btn)
//     document.body.appendChild(text)
//
//     btn.addEventListener('click', function () {
//             if (currentPlayer === 'X') {
//                 btn.textContent = 'X'
//                 currentPlayer = '0'
//                 text.textContent = 'игрок 1 сделал ход'
//             } else {
//                 btn.textContent = 'O'
//                 currentPlayer = 'X'
//                 text.textContent = 'игрок 2 сделал ход'
//             }
//         btn.disabled = true
//         }
//
//     )
//
// }

let text = document.querySelector('.text')
let btns = document.querySelectorAll('button')
let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function game(btns) {
    let counter = 0
    for (let btn of btns) {
        btn.addEventListener('click', function step() {
            if (counter % 2 === 0) {
                this.innerHTML = 'X'
                text.textContent = 'игрок 1 сделал ход'
                this.style.backgroundColor = 'green'
            } else {
                this.innerHTML = 'O'
                text.textContent = 'игрок 2 сделал ход'
                this.style.backgroundColor = 'yellow'
            }
            this.removeEventListener('click', step)
            if(winner(btns)) {
                text.textContent = 'Победил' + ' ' + this.innerHTML
            } else if (counter === 8) {
                text.textContent = 'Ничья'
            }
            counter++;
            }
        )
    }
}

function winner(btns) {
    for (let comb of combs) {
        if ( btns[comb[0]].innerHTML === btns[comb[1]].innerHTML && btns[comb[1]].innerHTML === btns[comb[2]].innerHTML && btns[comb[0]].innerHTML !== '') {
            return true;
        }
    }
    return false;
}
game(btns)


