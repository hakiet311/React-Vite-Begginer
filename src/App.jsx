import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default App;
