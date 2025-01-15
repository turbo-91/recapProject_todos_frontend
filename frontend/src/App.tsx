import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";
import {useEffect, useState} from "react";
import axios from 'axios';
import {Route, Routes, useParams} from "react-router-dom";
import Card from "./components/shared/Card/Card.tsx";

export interface Todo {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}

function App() {

    const [data, setData] = useState<Todo[]>([]); // Use the interface for type safety

    const fetchData = () => {
        axios
            .get<Todo[]>("http://localhost:8080/api/todo") // Ensure the response matches the type
            .then((response) => {
                setData(response.data); // Save the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log("data nach fetch", data)

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Main data={data}/>}/>
            <Route path="/todos/:id" element={<TodoCard data={data} />} />
        </Routes>
        <Footer/>
    </>
  )

    // Wrapper Component for the Card
    function TodoCard({ data }: { data: Todo[] }) {
        const { id } = useParams<{ id: string }>(); // Get the ID from the URL
        const todo = data.find((item) => item.id === id); // Find the matching Todo

        // If the Todo doesn't exist, render an error message
        if (!todo) {
            return <p>Todo with ID {id} not found.</p>;
        }

        // Pass the matching Todo's data to the Card component
        return <Card id={todo.id} description={todo.description} status={todo.status} />;

    }}

export default App
