import "./App.css";
import CommentsSection from "./components/comments/CommentsSection";
import ProgressBar from "./components/progressbar/ProgressBar";
import Thing from "./components/Thing";

function App() {
    return (
        <div className="mainContainer">
            <Thing title="Progress Bar" element={<ProgressBar />} />
            <Thing title="Comment Section" element={<CommentsSection />} />
        </div>
    );
}

export default App;
