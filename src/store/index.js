// 导入模块化处理的部分
import React, { useContext } from "react";
import counter from "./counter.Store";

class RootStore {
  constructor() {
    this.counter = counter;
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => useContext(context);
export { useStore };
