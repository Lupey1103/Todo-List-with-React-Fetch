import React from "react";

export const List = ({ text, todo, todos, setTodos }) => {
	//Events
	const deleteHandler = () => {
		setTodos(todos.filter((element) => element.id !== todo.id));
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{todo.label}
			</li>
			<button onClick={completeHandler} className="complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i button className="fas fa-trash"></i>
			</button>
		</div>
	);
};
