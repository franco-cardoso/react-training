import { ReactNode } from "react";

const Thing = (props: { title: string; children: ReactNode }) => {
    return (
        <div className="thingyDiv">
            <h1 className="componentTitle"> {props.title} </h1>
            <div className="componentDiv"> {props.children} </div>
        </div>
    );
};

export default Thing;
