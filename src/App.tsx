import "./App.css";
import CommentChain from "./components/comments/CommentChain";
import CommentsSection from "./components/comments/CommentsSection";
import Thing from "./components/Thing";

function App() {
    return (
        <div className="mainContainer">
            <Thing title="Comments">
                <CommentsSection />
            </Thing>

            <Thing title="some component">
                <div>some component</div>
            </Thing>
        </div>
    );
}



export default App;
