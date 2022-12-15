import "./App.css";
import CommentsSection from "./components/comments/CommentsSection";
import Thing from "./components/Thing";

function App() {
    return (
        <div className="mainContainer">
            <Thing title="Comments" element={<CommentsSection />}/>
        </div>
    );
}



export default App;
