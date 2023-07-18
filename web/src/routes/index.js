import Home from "./Home";
import Advance from "./Advance";
import Login from "./Login";

let routes = [
  { path: "/", component: Home, exact: true },
  { path: "/advance", component: Advance },
  { path: "/login", component: Login },
];
export default routes;
