import React from 'react';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './components/error/error';
import { Card } from '@mui/material';
import { LocalDrink } from '@mui/icons-material';
import { BrowserRouter } from "react-router-dom";
import Upload from './components/contact_upload';
import EditContact from './components/edit_contact';

interface WelcomeProps {
  name: string;
}
class Welcome extends React.Component<WelcomeProps> {
  name = 'ayman'
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Type assertion to ensure TypeScript understands the type of `rootElement`
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
const element = <Welcome name="Sara" />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <EditContact />,},
      {
        path: "dashboard",
        element: <EditContact />,
      },
      {
        path: "card",
        element: <Card />,
      },
    
  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
    {/* <BrowserRouter >
      <App />    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
