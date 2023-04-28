import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index.js";

function Layout() {
  const store = useStore();
  return (
    <div>
      <header>userName</header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default observer(Layout);
