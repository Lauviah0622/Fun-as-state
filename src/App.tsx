import './App.css';
import Arithmetic from './example/Arithmetic';
import AsyncAsSync from './example/AsyncAsSync';
import LegacyAtithmetic from './example/LegacyAtithmetic';
import LegacyExchange from './example/LegacyExchange';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/arithmetic',
    element: <Arithmetic/>,
  },
  {
    path: '/legacy-arithmetic',
    element: <LegacyAtithmetic/>,
  },
  {
    path: '/legacy-exchange',
    element: <LegacyExchange/>,
  },
  {
    path: '/exchange',
    element: <AsyncAsSync/>,
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
