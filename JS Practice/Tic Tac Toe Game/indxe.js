let boxes = document.querySelectorAll('.boxes');
let reset = document.querySelector('#reset');

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (turno) {
            box.innerHTML = 'X';
            turno = false;
        } else {
            box.innerHTML = 'O';
            turno = true;
        }
        box.style.pointerEvents = 'none'; // Prevent further clicks

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
            console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    }
}
