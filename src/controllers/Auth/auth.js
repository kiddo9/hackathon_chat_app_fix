import { Authentication } from "./auth.service.js";

class AuthController  Authentication {
  logUser() {
    const email = documentgetElementById("email");
    const pwd = documentgetElementById("password");
    try {
      const userInfo = loginUser({
        email: email,
        password: pwd,
      });

      if (userInfo) {
        window.location.href = `./index.html`;
      }

      return userInfo;
    } catch (error) {
      console.error("server error", error);
      return;
    }
  }

  validateAuthenticatedUser() {
    try {
      const id = localStorage.getItem("auth");
      const authUser = validateUser(id);
      return authUser;
    } catch (error) {
      console.error("server error", error);
      return;
    }
  }
}

const authController = AuthController();
export default authController;
