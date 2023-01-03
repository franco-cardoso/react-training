import Star from "./Star";
import "./rating.css";
import { ReactComponentElement, useState } from "react";

const Rating = () => {
    const [current, setCurrent] = useState<number>(-1);
    const [permCurrent, setPermCurrent] = useState<number>(-1);
    const [ratingActive, setRatingActive] = useState(false);
    let stars: ReactComponentElement<typeof Star>[] = [];
    let varToCompare = ratingActive ? current : permCurrent;

    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star
                key={i}
                active={varToCompare >= i ? true : false}
                ID={i}
                permCurrent={permCurrent}
                setCurrent={setCurrent}
                setPermCurrent={setPermCurrent}
            ></Star>
        );
    }

    return (
        <div
            className="ratingCont"
            onMouseEnter={() => setRatingActive(true)}
            onMouseLeave={() => setRatingActive(false)}
        >
            {stars}
        </div>
    );
};

export default Rating;
