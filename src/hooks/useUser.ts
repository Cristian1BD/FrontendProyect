export const useUser = () => {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");
  return { role, email };
};
