import PropTypes from "prop-types";
import { LuCircle, LuCheckCircle, LuTrash } from "react-icons/lu";
import useTodoStore from "../todoStore";

export default function TodoItem({ item }) {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <li
      key={item.id}
      className="flex flex-row justify-between border p-4 my-4 rounded-lg cursor-pointer select-none"
      onClick={() => toggleTodo(item.id)}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        {item.isCompleted ? (
          <LuCheckCircle className="text-green-500" />
        ) : (
          <LuCircle className="text-green-500" />
        )}
        <span className="font-medium">{item.title}</span>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="text-red-500" onClick={() => deleteTodo(item.id)}>
          <LuTrash />
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object,
};
