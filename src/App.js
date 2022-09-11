import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { LandingPage } from "./pages/LandingPage";
import { TodoApp } from "./pages/TodoApp";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        hideProgressBar={true}
        position="bottom-right"
        autoClose={450}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AuthProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/app"
              element={<PrivateRoute element={<TodoApp />} />}
            />
          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
