import { useState, FormEvent, ChangeEvent } from "react";
import {FormContainer, Select, Input, Button} from "./TodoForm.styles.ts";

interface TodoFormProps {
    onSubmit: (todo: { description: string; status: "OPEN" | "IN_PROGRESS" | "DONE" }) => void;
}

function TodoForm({ onSubmit }: TodoFormProps) {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<"OPEN" | "IN_PROGRESS" | "DONE">("OPEN");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit({ description, status });
        setDescription("");
        setStatus("OPEN");
    }

    function handleDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value);
    }

    function handleStatusChange(e: ChangeEvent<HTMLSelectElement>) {
        setStatus(e.target.value as "OPEN" | "IN_PROGRESS" | "DONE");
    }


    return (
        <FormContainer onSubmit={handleSubmit}>
            <label>
                Description:
                <Input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange} // Updated to use the typed function
                    placeholder="Enter todo description"
                    required
                />
            </label>
            <label>
                Status:
                <Select
                    value={status}
                    onChange={handleStatusChange} // Updated to use the typed function
                >
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                </Select>
            </label>
            <Button type="submit">Add Todo</Button>
        </FormContainer>
    );
}

export default TodoForm;