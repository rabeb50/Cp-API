
import './App.css';
import UserList from './UserList'
import 'bootstrap/dist/css/bootstrap.min.css';
  import {Container} from 'react-bootstrap'
function App() {
  return (
  
     <Container fluid='true' className="Containerapp">
      <UserList />
     </Container>
  
  );
}

export default App;
