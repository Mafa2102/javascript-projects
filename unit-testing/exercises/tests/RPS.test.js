const whoWon = require('../RPS.js');

describe("whoWon", function(){

    // TODO: behaves correctly when the players tie (both choose the same option). 
    test('when player1 and player2 are same, return "TIE!" ', function() {
        let result = whoWon('rock', 'rock'); // test identical showing
        expect(result).toBe("TIE!"); // Expected return 'TIE!'
    });

    // TODO: behaves correctly with remainder coded combinations.
    test('when player1 shows "rock" and player2 shows "paper", return "Player 2 wins!" ', function() {
        let result = whoWon('rock', 'paper'); // test rock vs paper
        expect(result).toBe('Player 2 wins!'); // Expected return 'Player 2 wins!'
    });

    test('when player1 shows "paper" and player2 shows "scissors", return "Player 2 wins!" ', function() {
        let result = whoWon('paper', 'scissors'); // test paper vs scissors
        expect(result).toBe('Player 2 wins!'); // Expected return 'Player 2 wins!'
    });

    test('when player1 shows "scissors" and player2 shows "rock", return "Player 2 wins!" ', function() {
        let result = whoWon('scissors', 'rock'); // test scissors vs rock
        expect(result).toBe('Player 2 wins!'); // Expected return 'Player 2 wins!'
    });
    test("both player use different value", function() {
        let result = whoWon("scissor", "paper");
        expect(result).toBe("Player 1 wins!");
    });

    test("both player use different value other than RPS", function() {
        let result = whoWon("sciss", "pap");
        expect(result).toBe("Player 1 wins!");
     });

});