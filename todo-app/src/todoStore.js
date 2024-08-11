import { create } from 'zustand';

const useTodoStore = create((set) => ({
    todos: [
        { title: "Some task", id: self.crypto.randomUUID(), isCompleted: false },
        {
            title: "Some other task",
            id: self.crypto.randomUUID(),
            isCompleted: true,
        },
        { title: "last task", id: self.crypto.randomUUID(), isCompleted: false },
    ],
    addTodo: (text) => set((state) => ({
        todos: [
            {
                title: text,
                id: self.crypto.randomUUID(),
                isCompleted: false
            },
            ...state.todos
        ]
    })),
    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    }))
}))

export default useTodoStore;