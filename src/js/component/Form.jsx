import React from "react";
import PropTypes from "prop-types";

export const Form = ({ todos, setTodos, input, setInput }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInput(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		const newTodo = [...todos, { label: input, done: false }];
		setTodos(newTodo);
		setInput("");
	};

	return (
		<form>
			<input
				onChange={inputTextHandler}
				value={input}
				type="text"
				className="todo-input"
				placeholder="Add to List"
			/>
			<button
				onClick={submitTodoHandler}
				className="todo-button"
				type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
		</form>
	);
};
