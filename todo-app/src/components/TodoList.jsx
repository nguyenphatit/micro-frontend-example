import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todos }) {
  return (
    <div className="flex flex-col my-6 w-full">
      <ol>
        {todos && todos.length > 0 ? (
          todos.map((todo) => <TodoItem key={todo.id} item={todo} />)
        ) : (
          <p className="w-full text-center">Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
};
