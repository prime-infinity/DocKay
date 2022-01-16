import Index from './views/Index'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  { BreakpointProvider } from 'react-socks';
import './index.css';

function App() {
  return (
    <div className="">
      <BreakpointProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </BreakpointProvider>
    </div>
  );
}

export default App;
