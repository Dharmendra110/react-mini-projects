import React, { useEffect, useState } from "react";

const UseStateTodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 1 CREATE - ADD
  function handleAdd() {
    const newdata = {
      id: Date.now(),
      name,
      age,
    };
    // localStorage.setItem('todos',JSON.stringify(todos))
    if (name.trim() === "" || name.trim() === "") {
      return alert("Please Enter valid data");
    }
    setTodos([...todos, newdata]);
    setName("");
    setAge("");
  }

  // 2. DELETE
  function handleDelete(id) {
    setTodos(() => todos.filter((item) => item.id !== id));
  }

  // 3. EDIT
  function handleEdit(item) {
    setName(item.name);
    setAge(item.age);
    setEdit(item.id);
  }

  // 4. UPDATE
  function handleUpdate() {
    if (!name.trim() || !age.trim()) {
      return alert("please enter valid data");
    }
    const update = todos.map((todo) =>
      todo.id == edit ? { ...todo, name, age } : todo,
    );
    setTodos(update);
    setEdit("");
    setAge("");
    setName("");
  }

  return (
    <div className="border-t m-5">
      <h1 className="m-5 text-4xl font-bold">Todo App</h1>
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
      <button className={`p-2 rounded-xl ${edit?'bg-green-600 hover:bg-green-700':'bg-blue-500 hover:bg-blue-600'}`} onClick={edit ? handleUpdate : handleAdd}>
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

export default UseStateTodoApp;
