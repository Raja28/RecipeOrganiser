import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Recipe from './pages/Recipe.jsx';
import AddRecipe from './pages/AddRecipe.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';


const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/recipe/:recipeId", element: <Recipe />},
  {path: "/add-recipe", element: <AddRecipe />}
])

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
   <RouterProvider router={router} />
  </Provider>,
)
