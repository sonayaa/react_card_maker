// import firebase from "firebase";
import { firebaseAuth, googleProvider, githubProvider } from "./firebase";

class AuthService {
  login(providerName) {
    // const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChange) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  onLogout() {
    firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}
export default AuthService;
