import {CardContainer} from "./Card.styles.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

export interface CardProps {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
    onUpdate: (id: string, updatedDescription: string) => void;
}

function Card(props: Readonly<CardProps>) { const navigate = useNavigate();
    const location = useLocation();
    const [isEditing, setIsEditing] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState(props.description);

    function toggleEdit() {
        setIsEditing((prev) => !prev); // Toggle edit mode
    }

    function handleUpdate() {
        props.onUpdate(props.id, updatedDescription); // Call the onUpdate prop
        setIsEditing(false); // Exit edit mode
    }

    function handleToggleView() {
        if (location.pathname === "/") {
            navigate(`/todos/${props.id}`); // Navigate to the detail view
        } else {
            navigate("/"); // Navigate back to the main list
        }
    }

    // Determine the button label based on the current view
    const buttonLabel = location.pathname === "/" ? "Details" : "Back";

    return (
        <CardContainer>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={updatedDescription}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={toggleEdit}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{props.description}</p>
                    <p>{props.status}</p>
                    <button onClick={toggleEdit}>Edit</button>
                    <button onClick={handleToggleView} style={{ marginTop: "10px" }}>
                        {buttonLabel}
                    </button>
                </div>
            )}
        </CardContainer>
    );
}

export default Card;