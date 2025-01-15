import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Main from "./components/Main/Main.tsx";
import {useEffect, useState} from "react";
import axios from 'axios';

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
        <Main data={data}/>
        <Footer/>
    </>
  )
}

export default App
