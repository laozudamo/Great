import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Layout from "@/layout/index.jsx";
import Login from "@/views/login/login.jsx";
import Error404 from "@/views/error/404.jsx";
import Error401 from "@/views/error/401.jsx";

function App() {
  // console.log(myTimer)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}
export default observer(App);
