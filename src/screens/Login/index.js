import React, {
  useState
} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {
  auth,
  signInWithEmailAndPassword
} from '../../config/Firebase/Firebase.js';

const Login = ({
  navigation
}) => {
  const [email,
    setEmail] = useState('');
  const [password,
    setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setIsLoading(false);
      alert("Logged in.");
      navigation.navigate('ApplicationStack');
    })
    .catch((error) => {
      setIsLoading(false)
      alert(error.message);
    })
  }
  return(
    <View>
      <View>
        <Text style={styles.title}>
          Login
        </Text>
        <Text style={styles.subtitle}>
          Add your details to login
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <ScrollView>
        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} keyboardType="email-address" maxLength={30} autoFocus={true} placeholder="Your Email" style={styles.input} />
        <TextInput value={password} onChange={(e) => setPassword(e.target.value)} secureTextEntry={true} maxLength={14} placeholder="Password" style={styles.input} />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => login()} activeOpacity={0.7}>
          <Text style={styles.button}>
            {isLoading ? <ActivityIndicator color="#fff" size="small" />: "Login"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPasswordLink}>
        <Text style={ { color: "#7d7d7d" }}>
          <Text onPress={() => navigation.navigate('ResetPassword')}>Forgot password?</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.signupText}>
          Don't have an Account?&nbsp;
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Sign Up</Text>
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
  forgotPasswordLink: {
    textAlign: "center",
    marginBottom: 20
  },
  signupText: {
    textAlign: "center",
    color: "#7d7d7d"
  },
  signupLink: {
    fontWeight: "bold",
    color: "#08ad69"
  }
});

export default Login;