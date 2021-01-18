import { update } from "./list-todo-slice.js";

export default function getInitialTodos(store) {
  console.log("eloszka todo");
  fetch("/api/todo/list")
    .then((res) => res.json())
    // .then((data) =>
    //   data && data.code === 200 && data.message === "OK" ? 1 : -1
    // )
    // .catch(() => -2)
    .then((result) => {
      console.log("result", result);
      store.dispatch(update(result.data));
      // if (result > 0) {
      //   return 5000;
      // }
      // return 300;
    });
}
