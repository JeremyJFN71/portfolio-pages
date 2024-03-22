import { lazy } from "react";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
   {
      key: "home",
      path: "/",
      component: lazy(() => import("../pages/Home")),
   },
   {
      key: "navigate-login",
      path: "/admin",
      component: () => Navigate({ to: "/admin/login" }),
   },
];

export const protectedRoutes = [
   {
      key: "projects",
      path: "/admin/project",
      component: lazy(() => import("../pages/admin/AdminProject")),
   },
   {
      key: "project-edit",
      path: "/admin/project/:id/edit",
      component: lazy(() => import("../pages/admin/ProjectEdit")),
   },
   {
      key: "email",
      path: "/admin/email",
      component: lazy(() => import("../pages/admin/AdminEmail")),
   },
   {
      key: "email-detail",
      path: "/admin/email/:id",
      component: lazy(() => import("../pages/admin/EmailDetail")),
   },
];

export const guestOnlyRoutes = [
   {
      key: "login",
      path: "/admin/login",
      component: lazy(() => import("../pages/admin/Login")),
   },
];

export const routes = [...publicRoutes, ...protectedRoutes, ...guestOnlyRoutes];
