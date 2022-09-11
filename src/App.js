import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { LandingPage } from "./pages/LandingPage";
import { TodoApp } from "./pages/TodoApp";
import "react-toastify/dist/ReactToastify.min.css";

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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<PrivateRoute element={<TodoApp />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
