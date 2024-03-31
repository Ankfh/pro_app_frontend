export const LoginUserApi = (data) => ({
  url: "/login",
  method: "POST",
  body: { data },
});
