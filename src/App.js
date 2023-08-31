
import './App.css';
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        <div className="prvi">
        <a className="naslovnitekst" href="/home">Home</a>
        <a className="naslovnitekst" href="/aboutus">About us</a>
        <a className="naslovnitekst" href="/contact">Contact</a>
        <a className="naslovnitekst" href="/products">Products</a>
        </div>
       <div className="drugi">
        <a className="naslovnitekst" href="/myaccount">My account</a>
       </div>
      </header>
      <main>
      <Outlet />
      </main>
      <footer>
        <div className="copyright">
          <a>@CopyrightByJosipa</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
