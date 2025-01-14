import {CardContainer} from "./Card.styles.ts";

interface CardProps {
    title: string;
    description: string;
}

function Card(props: Readonly<CardProps>) {
    return (
        <CardContainer>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </CardContainer>
    );
}

export default Card;
