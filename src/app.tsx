import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="bg-green-400 uppercase text-center">
        electron-typescript-react-tailwind-boilerplate
      </h1>
    </div>
  );
};

const container = document.getElementById("mainContainer");
const root = createRoot(container);

root.render(<App />);
