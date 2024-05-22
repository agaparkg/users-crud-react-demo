import { Button, Table } from "react-bootstrap";

function UsersTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birth date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="field-avatar">
            <img src="" alt="" />
          </td>
          <td>Alex</td>
          <td>Jones</td>
          <td>a@a.com</td>
          <td>Jan 23 1990</td>
          <td>
            <Button variant="primary">Update</Button>{" "}
            <Button variant="danger">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UsersTable;
