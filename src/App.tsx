import React from "react";
import "./App.css";
import CommentsSection from "./components/comments/CommentsSection";
import Thing from "./components/Thing";

function App() {    
    const test = React.createElement("h1",null,"test")

    return (
        <div className="mainContainer">
            <Thing title="title" element={<div />}/>
            <Thing title="Comments" element={<CommentsSection />}/>
        </div>
    );
}





export default App;
