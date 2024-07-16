import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuNoticias } from './components/MenuNoticias';
import { Homepage } from './components/Homepage';


const Routing = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/news" element={<MenuNoticias/>} />
            
        </Routes>
        </BrowserRouter>
    );
};

export default Routing;