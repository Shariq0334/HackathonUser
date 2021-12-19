import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  collection,
  doc,
  setDoc
} from "../../config/Firebase/Firebase.js";

const Signup = ({
  navigation
}) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const register = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      alert("Authenticated");
      const user = {
        name: name,
        email: email,
        uid: userCredential.user.uid
      }
      const usersCol = collection(db, "users");
      const userDoc = doc(usersCol, `${userCredential.user.uid}`);
      await setDoc(userDoc, user);
      setIsLoading(false);
      alert("Registered.");
      navigation.navigate('Login');
    })
    .catch((error) => {
      setIsLoading(false);
      alert(error.message);
    })
  }
  return(
    <View>
      <View>
        <Text style={styles.title}>
          Sign Up
        </Text>
        <Text style={styles.subtitle}>
          Add your details to sign up
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <ScrollView>
        <TextInput value={name} onChange={(e) => setName(e.target.value)} maxLength={30} autoFocus={true} placeholder="Name" style={styles.input} />
        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} maxLength={30} keyboardType="email-address" placeholder="Email" style={styles.input} />
        <TextInput value={password} onChange={(e) => setPassword(e.target.value)} secureTextEntry={true} maxLength={14} placeholder="Password" style={styles.input} />
        <TextInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} secureTextEntry={true} maxLength={14} placeholder="Confirm Password" style={styles.input} />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => register()} activeOpacity={0.7}>
          <Text style={styles.button}>
            {isLoading ? <ActivityIndicator color="#fff" size="small" /> : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.loginText}>
          Already have an Account?&nbsp;
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    width: "100%",
    color: "#767e80",
    fontSize: 45,
    padding: 10,
    textAlign: "center"
  },
  subtitle: {
    width: "100%",
    color: "#7d7d7d",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  inputContainer: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 20
  },
  input: {
    height: 60,
    backgroundColor: "#e7e7e7",
    borderRadius: 25,
    marginBottom: 25,
    paddingHorizontal: 20
  },
  buttonContainer: {
    width: "85%",
    marginHorizontal: "auto",
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    display: "flex",
    width: "100%",
    height: 70,
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a"
  },
  loginText: {
    textAlign: "center",
    color: "#7d7d7d"
  },
  loginLink: {
    fontWeight: "bold",
    color: "#08ad69"
  }
});

export default Signup;