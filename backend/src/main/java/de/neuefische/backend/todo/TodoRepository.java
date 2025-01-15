package de.neuefische.backend.todo;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
class TodoRepository {

    private final Map<String, Todo> todos = new HashMap<>(Map.of(
            "1", new Todo("1", "Buy groceries", TodoStatus.OPEN),
            "2", new Todo("2", "Finish homework", TodoStatus.IN_PROGRESS),
            "3", new Todo("3", "Clean the house", TodoStatus.DONE),
            "4", new Todo("4", "Prepare for the meeting", TodoStatus.OPEN),
            "5", new Todo("5", "Book doctor’s appointment", TodoStatus.IN_PROGRESS),
            "6", new Todo("6", "Write a blog post", TodoStatus.OPEN),
            "7", new Todo("7", "Fix the leaking faucet", TodoStatus.DONE),
            "8", new Todo("8", "Plan weekend trip", TodoStatus.OPEN),
            "9", new Todo("9", "Read the new book", TodoStatus.IN_PROGRESS),
            "10", new Todo("10", "Organize closet", TodoStatus.DONE)
    ));

    public List<Todo> getAll() {
        return new ArrayList<>(todos.values());
    }

    public Todo save(Todo todoToSave) {
        todos.put(todoToSave.id(), todoToSave);
        return todoToSave;
    }

    public Todo getById(String id) {
        return todos.get(id);
    }

    public Todo update(Todo todo) {
        todos.put(todo.id(), todo);
        return todo;
    }

    public void delete(String id) {
        todos.remove(id);
    }
}
