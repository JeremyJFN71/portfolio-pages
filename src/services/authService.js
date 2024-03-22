import useFetch from "../helpers/useFetch";

export const checkLogin = async () =>
   await useFetch("/api/admin/loggedIn");

export const login = async (body) =>
   await useFetch("/api/admin/login", {
      method: "POST",
      body,
   });

export const logout = async () =>
   await useFetch("/api/admin/logout", { method: "POST" });
