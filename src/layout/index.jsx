import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index.js";

function Layout() {
  const store = useStore();
  function add() {
    store.counter.add();
  }

  function dec() {
    store.counter.dec();
  }
  return (
    <div>
      {store.counter.count}
      <Button onClick={() => add()} variant="contained">
        ++
      </Button>
      <Button onClick={() => dec()} variant="contained">
        --
      </Button>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default observer(Layout);
