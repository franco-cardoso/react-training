import "./App.css";
import CommentsSection from "./components/comments/CommentsSection";
import ProgressBar from "./components/progressbar/ProgressBar";
import Rating from "./components/stars/Rating";
import Thing from "./components/Thing";
import Game from "./components/ttt/Game";

function App() {
    return (
        <div className="mainContainer">
            <Thing title="Rating" element={<Rating />} />
            <Thing title="Tic Tac Toe" element={<Game />} />
            <Thing title="Progress Bar" element={<ProgressBar />} />
            <Thing title="Comment Section" element={<CommentsSection />} />
        </div>
    );
}

export default App;
