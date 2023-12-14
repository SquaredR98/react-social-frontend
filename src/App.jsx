import { RouterProvider } from "react-router-dom";
import AppRouter from "@root/routes";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <RouterProvider router={AppRouter} />
      <p className="fixed bottom-5 right-5 bg-gray-600 px-4 py-1 rounded-md font-medium text-white">
        DEV
      </p>
      <ToastContainer />
    </div>
  );
}

export default App
