import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 4;
  constructor() {
    makeAutoObservable(this);
  }
  // 处理计算属性
  get filterList() {
    return this.list.filter((item) => item > 2);
  }

  add() {
    this.count++;
  }

  dec() {
    this.count--;
  }
}

const counter = new CounterStore();

export default counter;
