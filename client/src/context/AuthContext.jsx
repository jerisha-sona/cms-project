import React, { createContext, useState, useContext, useRef } from "react";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Use a ref to hold registeredUsers to avoid stale closures
  const registeredUsersRef = useRef([
    { email: "admin@gmail.com", password: "admin123", name: "Admin User", username: "admin" },
  ]);

  // We still keep a state just to trigger re-render if needed
  const [registeredUsersState, setRegisteredUsersState] = useState(registeredUsersRef.current);

  // login checks the ref, which always has latest users
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      const foundUser = registeredUsersRef.current.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${foundUser.name}!`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        resolve(foundUser);
      } else {
        Swal.fire({
          title: "Login Failed",
          text: "Invalid email or password",
          icon: "error",
          showConfirmButton: true,
        });
        reject(new Error("Invalid email or password"));
      }
    });
  };

  const logout = () => {
    setUser(null);
    Swal.fire({
      title: "Logged Out",
      icon: "info",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // signup adds new user to the ref and updates state to re-render
  const signUp = (newUser) => {
    return new Promise((resolve) => {
      const usernameExists = registeredUsersRef.current.some(u => u.username === newUser.username);
      const emailExists = registeredUsersRef.current.some(u => u.email === newUser.email);

      if (usernameExists) {
        Swal.fire("Oops!", "Username already taken", "error");
        resolve({ success: false, message: "Username already taken" });
        return;
      }

      if (emailExists) {
        Swal.fire("Oops!", "Email already registered", "error");
        resolve({ success: false, message: "Email already registered" });
        return;
      }

      // Add new user to ref array
      registeredUsersRef.current = [...registeredUsersRef.current, newUser];
      // Update state to trigger re-render
      setRegisteredUsersState(registeredUsersRef.current);

      setUser(newUser);
      Swal.fire({
        title: "Account Created!",
        text: `Welcome aboard, ${newUser.name}!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      resolve({ success: true });
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export const useAuth = () => useContext(AuthContext);
