import { BrowserRouter } from "react-router-dom";
import { HeaderApp } from "./components/header/HeaderApp";
import { RoutesApp } from "./routes/RoutesApp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderApp />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
