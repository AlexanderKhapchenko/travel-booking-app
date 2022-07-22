import React, {useEffect, useState} from "react";
import styles from "./main.module.scss";
import TravelCards from "./travel-cards";
import {ITravelCardProps} from "./travel-card/interface";
import SearchPanel from "./search-panel";
import {ITrip} from "../../../store/trips/reducer";
import { useDispatch} from "react-redux";
import {tripsActions} from "../../../store/actions";
import {DataStatus} from "../../../common/enums/app/app";
import Loader from "../../common/loader/loader";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {Routes} from "../../../common/enums/routes/routes.enum";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const [level, setLevel] = useState('');
    const [duration, setDuration] = useState('');
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tripsActions.getAll() as any);
    }, [dispatch])

    const {cards, status} = useAppSelector(({tripsReducer})=>({
        cards: tripsReducer.trips,
        status: tripsReducer.status
    }));

    if (status === DataStatus.PENDING) {
        return (
            <main>
                <Loader />
            </main>
        );
    }

    if(status === DataStatus.ERROR) {
        navigate(Routes.SignIn);
    }

    const formattedCards = (cards: ITrip[]): ITravelCardProps[] => {
        const newCards = cards.map(card => {
            const {image, title, duration, price, level, description, id} = card;
            return {
                id,
                image: {
                    url: image,
                    alt: title
                },
                title,
                duration,
                description,
                level,
                price,
            }
        });
        return newCards;
    }

    const filtered = (cards: ITravelCardProps[]) => {
        let filteredCards = cards;
        if(level.trim().length) {
            filteredCards = filteredCards.filter(card => card.level === level);
        }
        if(duration.trim().length) {
            if(duration==="0_x_5") {
                filteredCards = filteredCards.filter(card => card.duration < 5);
            }
            if(duration==="5_x_10") {
                filteredCards = filteredCards.filter(card => card.duration >= 5 && card.duration < 10);
            }
            if(duration==="10_x") {
                filteredCards = filteredCards.filter(card => card.duration >= 10);
            }
        }

        return filteredCards;
    }

    const searchPost = (cards: ITravelCardProps[], term: string) => {
        if(term.length === 0) {
            return cards;
        }
        return cards.filter((card) => {
            return card.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    const normalizeCards = formattedCards(cards);
    const visibleCards = cards && filtered(searchPost(normalizeCards, term));

    return (
        <main>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <SearchPanel setTerm={setTerm} setDuration={setDuration} setLevel={setLevel} term={term}/>
            {cards ? <TravelCards cards={visibleCards}/> : null}
        </main>
    );
}

export default Main;