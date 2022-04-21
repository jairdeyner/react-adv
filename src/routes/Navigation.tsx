import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { routes } from "./routes";

import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to={to}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
