import './App.css'
import AuthPage from "./components/AuthPage/AuthPage"
import {useAuth} from "./hooks/auth.hook"

function App() {
  const {token, login, logout, userId} = useAuth()
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App
