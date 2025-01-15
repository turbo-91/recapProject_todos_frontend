import {MainContainer} from "./Main.styles.ts";
import {Todo} from "../../App.tsx";
import Card from "../shared/Card/Card.tsx";


interface MainProps {
    data: Todo[];
}

function Main({data}: MainProps) {

    console.log("Data in Main", data)

    return (
        <MainContainer>
            <h1>Todo List</h1>
            {data.map((todo) => (
                <Card
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    status={todo.status}
                />
            ))}
        </MainContainer>
    );
}

export default Main
