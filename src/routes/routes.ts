import { lazy, LazyExoticComponent } from "react";

import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    to: "lazyload",
    path: "lazyload/*",
    component: LazyLayout,
    name: "LazyLayout -  Dash",
  },
  {
    to: "no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No lazy",
  },
];
