const Square = ({ id, gameState, setGameState, next, setNext, winner }) => {
    return (
        <div
            className="squareCont"
            onClick={() => {
                if (winner) return;
                if (gameState[id]) return;
                const newState = [...gameState];
                newState[id] = next;
                setGameState(newState);
                setNext(next > 0 ? -1 : 1);
            }}
        >
            <p style={{ pointerEvents: "none" }}>
                {gameState[id] === 0 ? "" : gameState[id] > 0 ? "X" : "O"}
            </p>
        </div>
    );
};

export default Square;
