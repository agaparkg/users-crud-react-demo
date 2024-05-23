import { Button, Table } from "react-bootstrap";

function UsersTable({ users, handleUserDelete }) {
  const formatBirthDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birth date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.length ? (
          users.map((user) => {
            const { firstname, lastname, id, email, birthdate, avatar } = user;
            return (
              <tr key={id}>
                <td className="field-avatar">
                  <img src={avatar} alt="" />
                </td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{formatBirthDate(birthdate)}</td>
                <td>
                  <Button variant="primary">Update</Button>{" "}
                  <Button onClick={() => handleUserDelete(id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="6">No records found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default UsersTable;
