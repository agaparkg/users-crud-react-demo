import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import UsersTable from "./UsersTable.jsx";
import Search from "./Search.jsx";

function Users() {
  return (
    <Container>
      <>
        <Row className="mb-3">
          <Col className="text-start">
            <Search />
          </Col>
          <Col className="text-end">
            <Button variant="primary">Create New User</Button>
          </Col>
        </Row>
        <UsersTable />
      </>
      <Modal>
        <div>Modal Body</div>
      </Modal>
    </Container>
  );
}

export default Users;
