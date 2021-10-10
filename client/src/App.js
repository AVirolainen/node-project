import './App.css'
import AuthPage from "./components/AuthPage/AuthPage"
import {AuthContext} from "./context/AuthContext"
import {useAuth} from "./hooks/auth.hook"
import {BrowserRouter as Router} from "react-router-dom"

import {useRoutes} from "./routes"

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAunthenticated = !!token

  const routes = useRoutes()

  return (
    <div className="App">
      <AuthContext.Provider value={{
        token, login, logout, userId, isAunthenticated
      }}>
        <Router>
          {routes}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App
