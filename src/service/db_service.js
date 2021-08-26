import firebase from "firebase";
import firebaseApp from "./firebase";

class DBService {
    init(){
        const database = firebase.database();
    }
    
    writeUserData(userId, name, email, imageUrl) {
        firebaseApp.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
}
export default DBService;