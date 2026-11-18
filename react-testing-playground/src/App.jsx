
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(["Ullas", "Rahul"]);

  const addUser = () => {
    if (!name.trim()) return;

    setUsers((prev) => [...prev, name.trim()]);
    setName("");
  };

  return (
    <div>
      <h1>User Management</h1>

      <input
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add User</button>

      <h2>Users ({users.length})</h2>

      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default App;
