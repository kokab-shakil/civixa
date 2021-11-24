import { Container, Nav, Navbar, NavLink, Modal, Button } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         CIVIXA.AI
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
          Thank you for contacting us.We have received your email. Our sales team will be in contact with you soon
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}