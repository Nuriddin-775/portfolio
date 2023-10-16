import { BrowserRouter as Router } from "react-router-dom";
import AntConfigProvider from "./provider/antConfig";
import RoutElements from "./routes";

function App() {
  return (
    <Router>
      <AntConfigProvider>
        <RoutElements />
      </AntConfigProvider>
    </Router>
  );
}

export default App;
