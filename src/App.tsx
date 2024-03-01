import type { Component } from "solid-js";
import { Button } from "./ui/button";
import { css } from "~/styled-system/css";

const App: Component = () => {
  return (
    <div>
      <header>
        <h1 class="text-red-500">Hello, Solid!</h1>
        <div class={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>
        <Button>Click me</Button>
      </header>
    </div>
  );
};

export default App;
