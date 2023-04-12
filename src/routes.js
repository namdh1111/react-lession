import Major from "./pages/Major";
import Home from "./pages/Home";
import MajorEdit from "./pages/MajorEdit";
import Student from './pages/Student';
import NotFound from './pages/NotFound';
import NetWorkError from './pages/NetworkError';
import NoPermission from './pages/NoPermission';

const routes = [
  { path: "", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/major", component: <Major /> },
  { path: "/major-edit/:id", component: <MajorEdit /> },
  { path: "/student", component: <Student /> },
  { path: "/not-found", component: <NotFound /> },
  { path: "/net-work-error", component: <NetWorkError /> },
  { path: "/no-permission", component: <NoPermission /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
