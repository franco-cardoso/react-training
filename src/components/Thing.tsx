import { ReactNode } from "react";

const Thing = (props: { title: string; element: ReactNode }) => {
    return (
        <div className="thingyDiv">
            <h1 className="componentTitle"> {props.title} </h1>
            <div className="componentDiv"> {props.element} </div>
        </div>
    );
};

export default Thing;
