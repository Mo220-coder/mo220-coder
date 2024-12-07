import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Back() {
  return (
    <Container>
      <div>
        <Link to="/home">
        <button className='bkbtn'>Done</button>
        </Link>
      </div>
    </Container>
  )
}
