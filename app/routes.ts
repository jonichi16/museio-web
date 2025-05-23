import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("lib/components/organisms/navbar.tsx", [index("routes/home.tsx")]),
  route(".well-known/*", "routes/well-known.tsx"), // temp fix
] satisfies RouteConfig;
