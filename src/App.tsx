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
        <div class={css({ display: "flex", alignItems: "center", gap: "2" })}>
          <Button size="sm" colorPalette="orange">
            Click me
          </Button>
          <Button colorPalette="red">Click me</Button>
          <Button colorPalette="blue" size="lg">
            Click me
          </Button>
        </div>
      </header>
    </div>
  );
};

export default App;
