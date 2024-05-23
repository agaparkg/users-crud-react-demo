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

  const handleUserSearch = (query) => {
    setQueryStr(query);
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
              <Search queryStr={queryStr} handleUserSearch={handleUserSearch} />
            </Col>
            <Col className="text-end">
              <Button variant="primary">Create New User</Button>
            </Col>
          </Row>
          <UsersTable users={filteredUsers} />
        </>
      )}
      <Modal>
        <div>Modal Body</div>
      </Modal>
    </Container>
  );
}

export default Users;
