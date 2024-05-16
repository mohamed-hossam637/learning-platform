import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RouterProvider } from 'react-router-dom';
import router from "./Router/Router.js";
import './App.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
