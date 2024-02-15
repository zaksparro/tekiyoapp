// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoxParent from './componants/BoxParent/boxparent';
import BoxParent2 from './componants/BoxParent2/boxparent2';
import BoxParent3 from './componants/box3/boxparent3';
import Container from './Container';
import './animations/ScaleIn.css';
import './animations/ScaleOut.css';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<BoxParent />} />
          <Route path="/boxparent2" element={<BoxParent2 />} />
          <Route path="/boxparent3" element={<BoxParent3 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
