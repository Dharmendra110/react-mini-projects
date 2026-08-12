import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, updateTodo } from "./todoSlice";
// Using RTK
const TodoApp = () => {
  const { todos, edit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 1 CREATE - ADD
  function handleAdd() {
    if (name.trim() == "") return alert("The name cannot be empty");
    else if (age.trim() === "") return alert("Age cannot be empty");

    const newdata = {
      id: Date.now(),
      name,
      age,
    };
    dispatch(addTodo(newdata));
    setName("");
    setAge("");
  }

  // 2. DELETE
  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  // 3. EDIT
  function handleEdit(item) {
    setName(item.name);
    setAge(item.age);
    dispatch(editTodo(item.id));
  }

  // 4. UPDATE
  function handleUpdate() {
    if (!name.trim() || !age.trim()) {
      return alert("please enter valid data");
    }

    dispatch(updateTodo({ id: edit, name, age }));
    setAge("");
    setName("");
  }

  return (
    <div>
      <h1 className="m-5 text-4xl font-bold text-yellow-400">Todo App</h1>
      <label htmlFor="name">Name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        className="border p-1 m-2 rounded"
        id="name"
        value={name}
        type="text"
        placeholder="Enter Your Name"
      />
      <label htmlFor="age">Age</label>
      <input
        onChange={(e) => setAge(e.target.value)}
        className="border p-1 m-2 rounded"
        id="age"
        value={age}
        type="number"
        placeholder="Enter Your AGe"
      />
      <button
        className={`p-2 rounded-xl ${edit ? "bg-green-600 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-600"}`}
        onClick={edit ? handleUpdate : handleAdd}
      >
        {edit ? "Update" : "Add"}
      </button>

      <div>
        <table className="m-auto">
          <thead>
            <tr>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                ID
              </th>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                Name
              </th>
              <th className="border border-blue-200 bg-sky-800  px-10 py-2">
                Age
              </th>
            </tr>
          </thead>

          <tbody>
            {/* READ */}

            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border py-2 px-10 bg-gray-800">{todo.id}</td>
                <td className="border py-2 px-10 bg-gray-800">{todo.name}</td>
                <td className="border py-2 px-10 bg-gray-800">{todo.age}</td>
                <button
                  onClick={() => handleEdit(todo)}
                  className="border px-5 py-2 rounded bg-orange-400 hover:bg-orange-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="border px-5 py-2 rounded bg-red-500 hover:bg-red-600"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;

// Using Local State
// import React, { useEffect, useState } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     const saveTodos = localStorage.getItem("todos");
//     return saveTodos ? JSON.parse(saveTodos) : [];
//   });

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [edit, setEdit] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   function handleAdd() {
//     if(name.trim()===''){
//       alert('The name cannot be empty')
//     }else if(age.trim()===''){
//       alert('Age cannot be empty')
//     }
//     const newData = {
//       id: Date.now(),
//       name,
//       age,
//     };
//      if(todos.some(todo=>todo.name===newData.name)){
//       return alert('Duplicate todo not allowed')
//      }
//     setTodos((prev) => [...prev, newData]);
//     setName("");
//     setAge("");
//   }

//   function handleDelete(id) {
//     setTodos(todos.filter((item) => item.id !== id));
//   }

//   function handleEdit(todo) {
//     setName(todo.name);
//     setAge(todo.age);
//     setEdit(todo.id);
//   }

//   function handleUpdate() {
//     if(name.trim()===''){
//       alert('The name cannot be empty')
//     }else if(age.trim()===''){
//       alert('Age cannot be empty')
//     }
//     const update = todos.map((todo) =>  todo.id === edit ? { ...todo,  name, age } : todo);
//      setTodos(update);
//      setName('')
//      setAge('')
//      setEdit(false)
//   }
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-purple-500 mb-5">Todo App</h1>
//       <label className="m-3 text-xl" htmlFor="name">
//         Name
//       </label>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="p-1 text-lg border"
//         id="name"
//         type="text"
//         placeholder="Enter any Name"
//       />
//       <label className="m-3 text-xl" htmlFor="age">
//         Age
//       </label>
//       <input
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         className="border p-1 text-lg"
//         type="number"
//         placeholder="Enter any Age"
//       />
//       <button
//         onClick={edit ? handleUpdate : handleAdd}
//         className={`text-xl m-3 ${edit?'bg-blue-600':'bg-green-500'} p-2 rounded`}
//       >
//         {edit ? "Update" : "Add"}
//       </button>

//       <table className="m-auto">
//         <thead>
//           <tr>
//             <th className="bg-sky-700 px-5 border py-1">ID</th>
//             <th className="bg-sky-700 px-5 border">Name</th>
//             <th className="bg-sky-700 px-5 border">Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => (
//             <tr key={todo.id}>
//               <td className="bg-gray-700 px-5 border py-1">{todo.id}</td>
//               <td className="bg-gray-700 px-5 border py-1">{todo.name}</td>
//               <td className="bg-gray-700 px-5 border py-1">{todo.age}</td>
//               <button
//                 onClick={() => handleEdit(todo)}
//                 className="bg-orange-500 px-3 py-1 rounded border "
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(todo.id)}
//                 className="bg-red-500 py-1 rounded border ml-1 px-3"
//               >
//                 Delete
//               </button>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TodoApp;

// import React, { useEffect, useState } from "react";

// const TodoApp = () => {
//   const [todos, setTodos] = useState(() => {
//     const saveTodos = localStorage.getItem("todos");
//     return saveTodos ? JSON.parse(saveTodos) : [];
//   });

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [edit, setEdit] = useState();

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // 1 CREATE - ADD
//   function handleAdd() {
//     if (name.trim() == "")  return alert("The name cannot be empty");
//     else if(age.trim()==='') return alert('Age cannot be empty')

//     const newdata = {
//       id: Date.now(),
//       name,
//       age,
//     };
//     if(todos.some(todo=>todo.name===newdata.name)){
//       return alert('Duplacate Todo not allowed')
//     }
//     setTodos([...todos, newdata]);
//     setName("");
//     setAge("");
//   }

//   // 2. DELETE
//   function handleDelete(id) {
//     setTodos(() => todos.filter((item) => item.id !== id));
//   }

//   // 3. EDIT
//   function handleEdit(item) {
//     setName(item.name);
//     setAge(item.age);
//     setEdit(item.id);
//   }

//   // 4. UPDATE
//   function handleUpdate() {
//     if (!name.trim() || !age.trim()) {
//       return alert("please enter valid data");
//     }
//     const update = todos.map((todo) =>
//       todo.id == edit ? { ...todo, name, age } : todo,
//     );
//     setTodos(update);
//     setEdit("");
//     setAge("");
//     setName("");
//   }

//   return (
//     <div >
//       <h1 className="m-5 text-4xl font-bold text-yellow-400">Todo App</h1>
//       <label htmlFor="name">Name</label>
//       <input
//         onChange={(e) => setName(e.target.value)}
//         className="border p-1 m-2 rounded"
//         id="name"
//         value={name}
//         type="text"
//         placeholder="Enter Your Name"
//       />
//       <label htmlFor="age">Age</label>
//       <input
//         onChange={(e) => setAge(e.target.value)}
//         className="border p-1 m-2 rounded"
//         id="age"
//         value={age}
//         type="number"
//         placeholder="Enter Your AGe"
//       />
//       <button className={`p-2 rounded-xl ${edit?'bg-green-600 hover:bg-green-700':'bg-blue-500 hover:bg-blue-600'}`} onClick={edit ? handleUpdate : handleAdd}>
//         {edit ? "Update" : "Add"}
//       </button>

//       <div>
//         <table className="m-auto">
//           <thead>
//             <tr>
//               <th className="border border-blue-200 bg-sky-800  px-10 py-2">
//                 ID
//               </th>
//               <th className="border border-blue-200 bg-sky-800  px-10 py-2">
//                 Name
//               </th>
//               <th className="border border-blue-200 bg-sky-800  px-10 py-2">
//                 Age
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {/* READ */}

//             {todos.map((todo) => (
//               <tr key={todo.id}>
//                 <td className="border py-2 px-10 bg-gray-800">{todo.id}</td>
//                 <td className="border py-2 px-10 bg-gray-800">{todo.name}</td>
//                 <td className="border py-2 px-10 bg-gray-800">{todo.age}</td>
//                 <button
//                   onClick={() => handleEdit(todo)}
//                   className="border px-5 py-2 rounded bg-orange-400 hover:bg-orange-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(todo.id)}
//                   className="border px-5 py-2 rounded bg-red-500 hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TodoApp;

// // import React, { useEffect, useState } from "react";

// // const TodoApp = () => {
// //   const [todos, setTodos] = useState(() => {
// //     const saveTodos = localStorage.getItem("todos");
// //     return saveTodos ? JSON.parse(saveTodos) : [];
// //   });

// //   const [name, setName] = useState("");
// //   const [age, setAge] = useState("");
// //   const [edit, setEdit] = useState(false);

// //   useEffect(() => {
// //     localStorage.setItem("todos", JSON.stringify(todos));
// //   }, [todos]);

// //   function handleAdd() {
// //     if(name.trim()===''){
// //       alert('The name cannot be empty')
// //     }else if(age.trim()===''){
// //       alert('Age cannot be empty')
// //     }
// //     const newData = {
// //       id: Date.now(),
// //       name,
// //       age,
// //     };
// //      if(todos.some(todo=>todo.name===newData.name)){
// //       return alert('Duplicate todo not allowed')
// //      }
// //     setTodos((prev) => [...prev, newData]);
// //     setName("");
// //     setAge("");
// //   }

// //   function handleDelete(id) {
// //     setTodos(todos.filter((item) => item.id !== id));
// //   }

// //   function handleEdit(todo) {
// //     setName(todo.name);
// //     setAge(todo.age);
// //     setEdit(todo.id);
// //   }

// //   function handleUpdate() {
// //     if(name.trim()===''){
// //       alert('The name cannot be empty')
// //     }else if(age.trim()===''){
// //       alert('Age cannot be empty')
// //     }
// //     const update = todos.map((todo) =>  todo.id === edit ? { ...todo,  name, age } : todo);
// //      setTodos(update);
// //      setName('')
// //      setAge('')
// //      setEdit(false)
// //   }
// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold text-purple-500 mb-5">Todo App</h1>
// //       <label className="m-3 text-xl" htmlFor="name">
// //         Name
// //       </label>
// //       <input
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         className="p-1 text-lg border"
// //         id="name"
// //         type="text"
// //         placeholder="Enter any Name"
// //       />
// //       <label className="m-3 text-xl" htmlFor="age">
// //         Age
// //       </label>
// //       <input
// //         value={age}
// //         onChange={(e) => setAge(e.target.value)}
// //         className="border p-1 text-lg"
// //         type="number"
// //         placeholder="Enter any Age"
// //       />
// //       <button
// //         onClick={edit ? handleUpdate : handleAdd}
// //         className={`text-xl m-3 ${edit?'bg-blue-600':'bg-green-500'} p-2 rounded`}
// //       >
// //         {edit ? "Update" : "Add"}
// //       </button>

// //       <table className="m-auto">
// //         <thead>
// //           <tr>
// //             <th className="bg-sky-700 px-5 border py-1">ID</th>
// //             <th className="bg-sky-700 px-5 border">Name</th>
// //             <th className="bg-sky-700 px-5 border">Age</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {todos.map((todo) => (
// //             <tr key={todo.id}>
// //               <td className="bg-gray-700 px-5 border py-1">{todo.id}</td>
// //               <td className="bg-gray-700 px-5 border py-1">{todo.name}</td>
// //               <td className="bg-gray-700 px-5 border py-1">{todo.age}</td>
// //               <button
// //                 onClick={() => handleEdit(todo)}
// //                 className="bg-orange-500 px-3 py-1 rounded border "
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => handleDelete(todo.id)}
// //                 className="bg-red-500 py-1 rounded border ml-1 px-3"
// //               >
// //                 Delete
// //               </button>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default TodoApp;
