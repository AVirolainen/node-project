import './App.css'
import AuthPage from "./components/AuthPage/AuthPage"
import {AuthContext} from "./context/AuthContext"
import {useAuth} from "./hooks/auth.hook"
import {BrowserRouter as Router} from "react-router-dom"

import {useRoutes} from "./routes"

function App() {
  const {token, login, email, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  return (
    <div className="App">
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated, email
      }}>
        <Router>
          {routes}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App
