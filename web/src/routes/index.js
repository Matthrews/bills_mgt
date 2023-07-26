import Home from "./Home";
import Advance from "./Advance";
import AdvanceRatio from "./AdvanceRatio";
import Login from "./Login";

let routes = [
  { path: "/", component: Home, exact: true },
  { path: "/advance", component: Advance },
  { path: "/advance_ratio", component: AdvanceRatio },
  { path: "/login", component: Login },
];
export default routes;
