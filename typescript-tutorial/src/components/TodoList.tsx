import React from "react";
import "./style.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos,completedTodos,setCompletedTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provider,snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provider.innerRef}
            {...provider.droppableProps}
            
          >
            <span className="todos_heading">Active Task</span>
            {todos.map((todo,index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provider,snapshot) => (
          <div
            className={`todos remove${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            <span className="todos_heading">Completed task</span>
            {completedTodos.map((todo,index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
