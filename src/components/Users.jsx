import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import UsersTable from "./UsersTable.jsx";
import Search from "./Search.jsx";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";

const usersUrl = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/users/";

function Users({ setLoggedIn }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [queryStr, setQueryStr] = useState("");

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoggedIn(false);
      return;
    }

    try {
      const res = await fetch(usersUrl);
      const data = await res.json();

      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching users", err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      setLoggedIn(false);
      return;
    }

    try {
      const res = await fetch(usersUrl + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      console.log(data);

      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (err) {
      console.log("Error fetching users", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserSearch = (query) => {
    setQueryStr(query);
  };

  const handleUserDelete = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    return (
      user.firstname.toLowerCase().includes(queryStr) ||
      user.lastname.toLowerCase().includes(queryStr)
    );
  });

  return (
    <Container>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Row className="mb-3">
            <Col className="text-start">
              <Search handleUserSearch={handleUserSearch} />
            </Col>
            <Col className="text-end">
              <Button variant="primary">Create New User</Button>
            </Col>
          </Row>
          <UsersTable
            handleUserDelete={handleUserDelete}
            users={filteredUsers}
          />
        </>
      )}
      <Modal>
        <div>Modal Body</div>
      </Modal>
    </Container>
  );
}

export default Users;
