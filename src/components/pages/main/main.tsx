import React, {useEffect, useState} from "react";
import styles from "./main.module.scss";
import TravelCards from "./travel-cards";
import {ITravelCardProps} from "./travel-card/interface";
import {getTravelList, ITravelListResponse} from "../../../services/api";
import SearchPanel from "./search-panel";

const Main = () => {

    const [cards, setCards] = useState<ITravelCardProps[]>();
    const [level, setLevel] = useState('');
    const [duration, setDuration] = useState('');
    const [term, setTerm] = useState('');

    const formattedCards = (cards: ITravelListResponse[]): ITravelCardProps[] => {
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

    useEffect(() => {
        async function callApi() {
            const cardsRaw = await getTravelList();
            const cards = formattedCards(cardsRaw);
            setCards(cards);
        }

        callApi();
    }, []);

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

    const visibleCards = cards && filtered(searchPost(cards, term));

    return (
        <main>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <SearchPanel setTerm={setTerm} setDuration={setDuration} setLevel={setLevel} term={term}/>
            {cards ? <TravelCards cards={visibleCards}/> : null}
        </main>
    );
}

export default Main;