import React from 'react';
import styles from "./search-panel.module.scss";

interface ISearchPanelProps {
    setTerm: Function,
    setDuration: Function,
    setLevel: Function,
    term: string
}

const SearchPanel: React.FC<ISearchPanelProps> = ({setTerm, setDuration, setLevel, term}) => {
    return (
        <section className={styles.tripsFilter}>
            <h2 className={styles.visuallyHidden}>Trips filter</h2>
            <form className={styles.tripsFilter__form} autoComplete="off">
                <label className={`${styles.tripsFilter__search} ${styles.input}`}>
                    <span className={styles.visuallyHidden}>Search by name</span>
                    <input name="search" type="search" placeholder="search by title" onChange={(e)=>setTerm(e.target.value)} value={term}/>
                </label>
                <label>
                    <span className={styles.visuallyHidden}>Search by duration</span>
                    <select className={styles.select} name="duration" onChange={(e) => setDuration(e.target.value)}>
                        <option value="">duration</option>
                        <option value="0_x_5">&lt; 5 days</option>
                        <option value="5_x_10">&lt; 10 days</option>
                        <option value="10_x">&ge; 10 days</option>
                    </select>
                </label>
                <label>
                    <span className={styles.visuallyHidden}>Search by level</span>
                    <select className={styles.select} name="level" onChange={(e) => setLevel(e.target.value)}>
                        <option value="">level</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
                </label>
            </form>
        </section>
    )
}

export default SearchPanel;