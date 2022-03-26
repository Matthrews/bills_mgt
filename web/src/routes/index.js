import Home from "./Home";
import Login from "./Login";

let routes = [
  { path: "/", component: Home, exact: true },
  { path: "/login", component: Login },
];
export default routes;
