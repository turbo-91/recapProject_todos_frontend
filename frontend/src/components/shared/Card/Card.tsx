import {CardContainer} from "./Card.styles.ts";

export interface CardProps {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}

function Card(props: Readonly<CardProps>) {
    return (
        <CardContainer>
            <p>{props.description}</p>
            <p>{props.status}</p>
        </CardContainer>
    );
}

export default Card;