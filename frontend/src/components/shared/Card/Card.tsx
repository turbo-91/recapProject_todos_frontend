import {CardContainer} from "./Card.styles.ts";
import {useNavigate} from "react-router-dom";

export interface CardProps {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}

function Card(props: Readonly<CardProps>) {

    const navigate = useNavigate();

    function handleCardClick() {
        navigate(`/todos/${props.id}`);
    }

    return (
        <CardContainer onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <p>{props.description}</p>
            <p>{props.status}</p>
        </CardContainer>
    );
}

export default Card;