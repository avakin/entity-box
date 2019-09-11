import React from "react";
import "./styles/index.less";
import "./App.less";
import EntityBox from "./components/EntityBox";
import { entitiesService } from "./services/services";

function App() {
  return (
    <main className="app">
      <div className="entities">
        {entitiesService.map((el, index) => (
          <EntityBox key={index} {...el} />
        ))}
      </div>
    </main>
  );
}

export default App;
