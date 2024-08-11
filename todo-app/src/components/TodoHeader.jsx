import useTodoStore from '../todoStore';

export default function TodoHeader() {
  const { todos } = useTodoStore();

  const todosCompleted = todos.filter((todo) => todo.isCompleted).length;
  const totalTodos = todos.length;

  return (
    <section className="border flex flex-row justify-between items-center p-6 rounded-lg">
      <div>
        <p className="text-3xl">Task Done</p>
        <p>Keep it up</p>
      </div>
      <div className="text-4xl bg-green-500 p-6 rounded-md text-green-950">
        {todosCompleted}/{totalTodos}
      </div>
    </section>
  );
}
