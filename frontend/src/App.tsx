import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";
import TodoForm from "./components/TodoForm/TodoForm.tsx";
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

    const addTodo = (newTodo: { description: string; status: "OPEN" | "IN_PROGRESS" | "DONE" }) => {
        axios
            .post<Todo>("http://localhost:8080/api/todo", newTodo)
            .then((response) => {
                setData((prevData) => [...prevData, response.data]); // Append the new todo to the "data" state
            })
            .catch((error) => {
                console.error("Error adding new todo:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateTodo = (id: string, updatedDescription: string) => {
        const todoToUpdate = data.find((todo) => todo.id === id);
        if (!todoToUpdate) return;

        const updatedTodo = { ...todoToUpdate, description: updatedDescription };

        axios
            .put<Todo>(`http://localhost:8080/api/todo/${id}`, updatedTodo)
            .then((response) => {
                setData((prevData) =>
                    prevData.map((todo) => (todo.id === id ? response.data : todo))
                );
            })
            .catch((error) => {
                console.error("Error updating todo:", error);
            });
    };

    const deleteTodo = (id: string) => {
        axios
            .delete(`http://localhost:8080/api/todo/${id}`)
            .then(() => {
                setData((prevData) => prevData.filter((todo) => todo.id !== id)); // Remove the todo from state
            })
            .catch((error) => {
                console.error("Error deleting todo:", error);
            });
    };

    console.log("data nach fetch", data)

  return (
    <>
        <Header/>
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <TodoForm onSubmit={addTodo} />
                        <Main data={data} onUpdate={updateTodo} onDelete={deleteTodo} />
                    </>
                }
            />
            <Route path="/todos/:id" element={<TodoCard data={data} />} />
        </Routes>
        <Footer/>
    </>
  )

    function TodoCard({ data }: { data: Todo[] }) {
        const { id } = useParams<{ id: string }>();
        const todo = data.find((item) => item.id === id);

        if (!todo) {
            return <p>Todo with ID {id} not found.</p>;
        }

        return <Card id={todo.id} description={todo.description} status={todo.status} onUpdate={updateTodo}  onDelete={deleteTodo}/>;
    }
}

export default App
