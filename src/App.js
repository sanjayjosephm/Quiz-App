import './App.css';
import MainLayout from './components/mainLayout';
import QuizPage from './components/quizPage';
import LastPage from './components/LastPage';
import { SidebarProvider } from './components/SidebarContext';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <SidebarProvider>
      <Router>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/quizPage/:questionNumber" element={<QuizPage />} />
            <Route path='/lastPage' element={<LastPage/>}/>
            {/* <Route path='/sidebar' element={<Slidebar/>}/> */}
          </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;
