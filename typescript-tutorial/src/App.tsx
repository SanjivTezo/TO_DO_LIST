import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedToos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  // console.log(todos);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedToos;
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);

    }
    else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    }
    else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handelAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedToos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};
export default App;

// import React, { useState } from "react";
// import "./App.css";
// import InputFeild from "./components/InputFeild";
// import { Todo } from "./model";
// import TodoList from "./components/TodoList";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";

// const App: React.FC = () => {
//   const [todo, setTodo] = useState<string>("");
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (todo) {
//       setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
//       setTodo("");
//     }
//   };

//   const onDragEnd = (result: any) => {
//     const { source, destination } = result;

//     if (!destination) return;

//     if (source.droppableId === destination.droppableId && source.index === destination.index) {
//       return;
//     }

//     let add;
//     let active = todos;
//     let complete = completedTodos;

//     // Remove item from source
//     if (source.droppableId === "TodosList") {
//       add = active[source.index];
//       active.splice(source.index, 1);
//     } else {
//       add = complete[source.index];
//       complete.splice(source.index, 1);
//     }

//     // Add item to destination
//     if (destination.droppableId === "TodosList") {
//       active.splice(destination.index, 0, add);
//     } else {
//       complete.splice(destination.index, 0, add);
//     }

//     setTodos(active);
//     setCompletedTodos(complete);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="App">
//         <span className="heading">Taskify</span>
//         <InputFeild todo={todo} setTodo={setTodo} handelAdd={handleAdd} />
//         <div className="container">
//           <Droppable droppableId="TodosList">
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className="todos"
//               >
//                 <TodoList
//                   todos={todos}
//                   setTodos={setTodos}
//                   completedTodos={completedTodos}
//                   setCompletedTodos={setCompletedTodos}
//                 />
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// };

// export default App;