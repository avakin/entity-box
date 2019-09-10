import React from "react";
import "./styles/index.less";
import "./App.less";
import EntityBox from "./components/EntityBox";

function App() {
  return (
    <main className="app">
      <div className="entities">
        {entities.map((el, index) => (
          <EntityBox key={index} {...el} />
        ))}
      </div>
    </main>
  );
}

const entities = [
  {
    entityType: "AppTier",
    entityName: "BD",
    connected: true,
    count: 32
  },
  {
    entityType: "Test entity type",
    entityName: "Some of entity name to display",
    connected: false,
    count: 178
  }
];

export default App;
