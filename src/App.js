import { RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom";
import { Loader } from "./routes/loader";
import { Calculator } from "./routes/calculator";
import { History } from "./routes/history";
import { useState } from "react";

function App() {
  const [history, setHistory] = useState([]);

  return (
    <Routes>
      <Route path="*" element={<Loader />} />
      <Route
        path="/calculator"
        element={
          <Calculator
            createHistory={(data) =>
              setHistory((history) => [...history, data])
            }
          />
        }
      />
      <Route path="/history" element={<History history={history} />} />
    </Routes>
  );
}

export default App;
