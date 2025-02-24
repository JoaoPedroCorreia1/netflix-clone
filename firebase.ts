import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsnOe0I0W8lMXDi_-4SIx2JI6GIgfDIAQ",
  authDomain: "netflix-clone-9a701.firebaseapp.com",
  projectId: "netflix-clone-9a701",
  storageBucket: "netflix-clone-9a701.firebasestorage.app",
  messagingSenderId: "1018132935439",
  appId: "1:1018132935439:web:9eba7e1f0afa2f210a047a"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
