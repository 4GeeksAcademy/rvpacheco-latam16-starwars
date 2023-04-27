import React, {useEffect, useContext, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Cards from "../component/Cards";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [currentIndex,setCurrentIndex] = useState(0);
	useEffect(() => {
		actions.fetchStarWars("planets");
		actions.fetchStarWars("people");
		actions.fetchStarWars("vehicles");
	}, []);

	const handleNext = () => {
        if (store.people && store.people.length > 0) {
            const lastIndex = Math.ceil(store.people.length / 4) - 1;
            if (currentIndex < lastIndex) {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    const handlePrev = () => {
        if (store.people && store.people.length > 0) {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        }
    };

    return (
        <div className="text-left mt-5">
            <h1>Characters</h1>
			<Cards data={store.people} currentIndex={currentIndex} />
            <div className="mt-3 text-center">
                <button className="btn btn-primary mr-2" onClick={handlePrev} disabled={currentIndex === 0}>
                    Prev
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={store.people ? currentIndex === Math.ceil(store.people.length / 4) - 1 : true}>
                    Next
                </button>
            </div>
        </div>
    );
};
