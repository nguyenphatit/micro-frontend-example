import useTodoStore from "../todoStore";

export default function TodoForm() {
  const { addTodo } = useTodoStore();
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    addTodo(value);
    event.target.reset();
  };

  return (
    <form
      className="flex flex-row my-4 w-full border rounded-lg"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo" className="w-3/4">
        <input
          type="text"
          name="todo"
          id="todo"
          className="w-full h-full p-4 rounded-l-lg bg-transparent outline-none"
          placeholder="Write your next task"
        />
      </label>
      <button className="w-1/4 bg-blue-400 hover:bg-blue-500 rounded-r-lg">
        Submit
      </button>
    </form>
  );
}