var circle = document.querySelector('#winner-circle');

function gameOver(winner) {
    var circlePosition = circle.getBoundingClientRect();

    winner.style.top = circlePosition.top + 'px';
    winner.style.left = circlePosition.left + 'px';
    winner.classList.add('winner');
    winner.classList.add('alter-ego');

    setTimeout(function() {
        alert(winner.id + ' Wins!');
        player1Position = 0;
        player2Position = 0;

        player1.style.top = '150px';
        player1.style.left = '15px';

        player2.style.top = '240px';
        player2.style.left = '15px';

        winner.classList.remove('winner');
        winner.classList.remove('alter-ego');

    }, 401);
}
