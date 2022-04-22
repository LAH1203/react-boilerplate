import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
);

export default App;
