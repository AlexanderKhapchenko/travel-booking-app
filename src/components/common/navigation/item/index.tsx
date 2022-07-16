import React, {HTMLAttributes} from "react";
import { Link } from "react-router-dom";

interface IItemProps {
    containerClass: string,
    innerClass: string,
    title: string,
    linkTo?: string,
    spanText: string,
    spanClass: string,
    imgUrl: string,
    imgAlt: string,
    childComponent?: JSX.Element
}

const Item = (props: IItemProps ) => {

    const {containerClass, title, linkTo, innerClass, spanText, spanClass, imgUrl, imgAlt, childComponent} = props;

    const getWithLink = (linkTo: string) => {
        return (
            <Link to={linkTo} className={innerClass}>
                {innerLi()}
            </Link>
        );
    }

    const getWithoutLink = () => {
        return (
            <div className={innerClass}>
                {innerLi()}
            </div>
        );
    }

    const innerLi = () => {
        return (
            <>
                <span className={spanClass}>{spanText}</span>
                <img src={imgUrl} alt={imgAlt}/>
                {childComponent && childComponent}
            </>
        )
    }

    return (
        <li className={containerClass} title={title}>
            {linkTo ? getWithLink(linkTo) : getWithoutLink()}
        </li>
    )
}

export default Item;