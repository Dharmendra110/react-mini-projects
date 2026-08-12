import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/users";
const Users = () => {
  const [users, setUsers] = useState([]);

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
      // Using Promise then()
      //    fetch(URL)
      //    .then(res=>{
      //   if (!res.ok) {
      //     throw new Error("Network response was not ok ");
      //   }
      //   return res.json();
      // })
      // .then(data=>setUsers(data.users))
      // .catch(err=>{
      //   console.log('fetching users Error',err)
      // })
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-500 underline mb-5">
        Dummy Users
      </h1>
      <table className="m-auto">
        <thead>
          <tr>
            <th className="bg-blue-800 border py-2 px-10">FirstName</th>
            <th className="bg-blue-800 border px-10">LastName</th>
            <th className="bg-blue-800 border px-10">Age</th>
            <th className="bg-blue-800 border px-10">Gender</th>
            <th className="bg-blue-800 border px-10">Country</th>
            <th className="bg-blue-800 border px-10">Email</th>
            <th className="bg-blue-800 border px-20">Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="bg-gray-800 border">{user.firstName}</td>
              <td className="bg-gray-800 border">{user.lastName}</td>
              <td className="bg-gray-800 border">{user.age}</td>
              <td className="bg-gray-800 border">{user.gender}</td>
              <td className="bg-gray-800 border">{user.address.city}</td>
              <td className="bg-gray-800 border">{user.email}</td>
              <td className="border bg-gray-800 flex justify-center">
                <img src={user.image} alt="User Images" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
