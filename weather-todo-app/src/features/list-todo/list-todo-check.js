// import { update } from "./list-todo-slice.js";

export default function todoCheck() {
  console.log("eloszka todo");
  fetch("/api/todo/list").then((res) => res.json());
  // .then((data) =>
  //   data && data.code === 200 && data.message === "OK" ? 1 : -1
  // )
  // .catch(() => -2)
  // .then((result) => {
  //   store.dispatch(update(result));
  //   if (result > 0) {
  //     return 5000;
  //   }
  //   return 300;
  // })
  // .then((delay) => setTimeout(startChecks, delay, store));
}
