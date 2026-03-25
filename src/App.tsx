import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./AuthContext";

import Login from "./Login";
import Dashboard from "./DashBoard";
import PrivateRoute from "./PrivateRoute";

import Exercise1 from "./excercises/excercise1";
import Exercise2 from "./excercises/excercise2";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/exercise1"
            element={
              <PrivateRoute>
                <Exercise1 />
              </PrivateRoute>
            }
          />

          <Route
            path="/exercise2"
            element={
              <PrivateRoute>
                <Exercise2 />
              </PrivateRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;