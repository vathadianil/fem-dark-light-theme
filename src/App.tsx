import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Card from "./components/main/Card";

function App() {
  return (
    <React.Fragment>
      <header className="container header">
        <Header />
      </header>

      <main>
        <section className="container">
          <Card />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
