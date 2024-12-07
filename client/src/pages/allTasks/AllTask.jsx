import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AllTask() {
  return (
    <Container fluid="xl" className="p-4">
      <div className="d-md-flex justify-content-between align-items-center py-4">
        <h1>My Tasks</h1>
        <Link to="/new-task">
          <button className="addTaskBtn">+ Add New Task</button>
        </Link>
        <div>
          <h6 className="text-danger">Urgent</h6>
          <button>Edit</button>
          <button>Delete</button>
          <hr />
          <h3>FinTech Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
        <div>
          <h6 className="text-success">Important</h6>
          <button className="EditBtn text-white">Edit</button>
          <button className="deleteBtn text-purple">Delete</button>
          <hr />
          <h3>Agro Website Update</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
          <Link to="/home">
          Back To Top
          </Link>
        </div>
      </div>
    </Container>
  );
}
