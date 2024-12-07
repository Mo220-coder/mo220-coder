import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";



export default function NewTask() {
  return (
    <Container fluid="xl" className="p-4">
    <div className="d-flex justify-content-start align-items-center py-4">
    <SlArrowLeft className="button fw-bold"/>
      <h1 className="d-flex justify-content-start">New Task</h1>
      <Link to="/all-task"></Link>
      <div>
        <h3 className="text-secondary">Task Title</h3>

      </div>
    </div>
    </Container>
  )
}
