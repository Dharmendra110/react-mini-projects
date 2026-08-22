import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/users";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [search,setSearch] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error("Netowrk response was not ok");
        }
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        console.log("fetching users Error", err);
      }
  
    }
    fetchUsers();
  }, []);
   
  // Search Filter
   const filterItem = users.filter((item)=>item.firstName.toLowerCase().includes(search.toLowerCase().trim()))

   // Delete
   function handleDelete(id){
    setUsers((prev)=>prev.filter((item)=>item.id!==id))
   }

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-500 underline mb-5">
        Dummy Users
      </h1>

      <label className="text-lg font-bold" htmlFor=" search">Search</label>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} className="border p-1 rounded mb-5 text-lg ml-2"  type="text" id="search" placeholder="Search by Name" />
      <table className="m-auto">
        <thead>
          <tr>
            <th className="bg-blue-800 border py-2 px-10">FirstName</th>
            <th className="bg-blue-800 border px-10">LastName</th>
            <th className="bg-blue-800 border px-10">Age</th>
            <th className="bg-blue-800 border px-10">Gender</th>
            <th className="bg-blue-800 border px-10">Country</th>
            <th className="bg-blue-800 border px-10">Email</th>
            <th className="bg-blue-800 border px-3 ">Image</th>
          </tr>
        </thead>
        <tbody>
          {filterItem.map((user) => (
            <tr key={user.id}>
              <td className="bg-gray-800 p-2 border">{user.firstName}</td>
              <td className="bg-gray-800 border">{user.lastName}</td>
              <td className="bg-gray-800 border">{user.age}</td>
              <td className="bg-gray-800 border">{user.gender}</td>
              <td className="bg-gray-800 border">{user.address.city}</td>
              <td className="bg-gray-800 border">{user.email}</td>
              <td className="border bg-gray-800 flex justify-center">
                <img className="w-12" src={user.image} alt="User Images" />
              </td>
              <td className="border px-2 bg-red-500 hover:bg-red-600"> <button onClick={()=>handleDelete(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
