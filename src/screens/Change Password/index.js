import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const NewPassword = ({navigation}) => {
  return(
    <View>
      <View>
        <Text style={styles.title} >
          New Password
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle} >
          Enter new password to replace your old one
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={true} maxLength={14} autoFocus={true} placeholder="New Password" style={styles.input} />
        <TextInput secureTextEntry={true} maxLength={14} placeholder="Confirm Password" style={styles.input} />
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7} >
          <Text style={styles.button}>
            Change Password
          </Text>
        </TouchableOpacity>
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
    width: "100%",
    height: 70,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
    paddingVertical: 25,
    borderRadius: 40,
    fontSize: 16,
    backgroundColor: "#39eb9a"
  },
});

export default NewPassword;