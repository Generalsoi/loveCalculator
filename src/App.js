import { Route, Routes } from "react-router-dom";
import { Loader } from "./routes/loader";
import { Calculator } from "./routes/calculator";
import { History } from "./routes/history";
import { useState } from "react";

function App() {
  const [history, setHistory] = useState([]);
  const [cache, setCache] = useState(
    JSON.parse(localStorage.getItem("cache")) ?? {}
  );

  const addToCache = (item, key) => {
    const currentCache = cache;
    currentCache[key] = item;
    setCache(currentCache);
    localStorage.setItem("cache", JSON.stringify(currentCache));
  };

  return (
    <Routes>
      <Route path="*" element={<Loader />} />
      <Route
        path="/calculator"
        element={
          <Calculator
            cache={cache}
            addToCache={addToCache}
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
