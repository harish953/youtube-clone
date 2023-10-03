import { Provider } from "react-redux";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="">
        <RouterProvider router={appRouter}>
          {" "}
          <Header />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
