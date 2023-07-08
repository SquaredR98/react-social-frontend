import React from "react";
import { RouterProvider } from 'react-router-dom';
import AppRouter from "./routes";

function App() {
  return (
    <div>
      <RouterProvider router={AppRouter} />
      <p className="fixed bottom-5 right-5 bg-gray-600 px-4 py-1 rounded-md font-medium text-white">
        DEV
      </p>
    </div>
  );
}

export default App;
