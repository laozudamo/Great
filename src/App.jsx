import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Layout from "@/layout/index.jsx";
import Signin from "@/views/Sign/Signin.jsx";
import Signup from "@/views/Sign/Signup";
import ForgetPwd from "@/views/Sign/ForgetPwd";

import Error404 from "@/views/error/404.jsx";
import Error401 from "@/views/error/401.jsx";

import RequireAuth from "@/components/requireAuth";

import Home from "./views/home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            {" "}
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/forgetPwd" element={<ForgetPwd />}></Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
export default observer(App);
