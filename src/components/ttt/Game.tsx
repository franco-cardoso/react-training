import { ReactComponentElement, useEffect, useState } from "react";
import Square from "./Square";
import "./game.css";
import Button from "../../utility/Button";

const Game = () => {
    const checkGame = () => {
        outcomes.forEach((result) => {
            const check = gameState[result[0]] + gameState[result[1]] + gameState[result[2]];
            if (check === 3) setWinner("X");
            if (check === -3) setWinner("O");
            if (!isNaN(gameState.reduce((a, b) => a / b, 0))) setWinner("Tie");
        });
    };
    let squares: ReactComponentElement<typeof Square>[] = [];
    const [winner, setWinner] = useState<string | undefined>(undefined);
    const [next, setNext] = useState<number>(1);
    const [gameState, setGameState] = useState<number[]>(gameArr);

    useEffect(() => {
        checkGame();
    }, [gameState]);

    for (let i = 0; i < 9; i++) {
        squares.push(
            <Square
                key={i}
                id={i}
                gameState={gameState}
                setGameState={setGameState}
                next={next}
                setNext={setNext}
                winner={winner}
            />
        );
    }

    return (
        <div className="gameCont">
            <div style={{ height: "50px" }}>
                {winner && <h2> {winner === "Tie" ? `${winner}!` : `${winner} wins!`} </h2>}
            </div>
            <div className="gridCont">{squares}</div>
            <div className="controls">
                <Button
                    onClick={() => {
                        setGameState(gameArr);
                        setNext(1);
                        setWinner(undefined);
                    }}
                >
                    Restart
                </Button>
            </div>
        </div>
    );
};
const gameArr: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const outcomes: number[][] = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];

export default Game;
