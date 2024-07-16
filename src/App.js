import './App.css';
import { Homepage } from './components/Homepage';
import { MenuNoticias } from './components/MenuNoticias';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/news",
    Component: MenuNoticias,
  },
  

]);
export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
