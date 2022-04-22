import React from "react";

// Import components
import { List } from "./List.jsx";

export const Todo = ({ todos, setTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<List
						todos={todos}
						setTodos={setTodos}
						key={todo.id}
						todo={todo}
						text={todo.text}
					/>
				))}
			</ul>
		</div>
	);
};
