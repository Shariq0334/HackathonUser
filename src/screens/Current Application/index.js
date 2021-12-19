import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import {
    auth,
    onAuthStateChanged,
    db,
    collection,
    doc,
    getDoc,
    onSnapshot
} from "../../config/Firebase/Firebase.js";
import logo from '../../assets/appLogo.png';

const CurrentApplication = () => {
    const [uid, setUid] = useState(null);
    const [application, setApplication] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            await setUid(user.uid)
        })

    }, [])
    useEffect(() => {
        if (uid) {
            getApplication()
        }
    }, [uid])
    const getApplication = async () => {
        const docRef = doc(db, "applications", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setApplication(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }
    return (
        <View>
         <Image source={logo} style={{width: "100%", height: 200, marginBottom: 20}} />
         <View style={styles.textView}>
           <Text style={styles.text}>Name: {application?.name}</Text>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text}>Father Name: {application?.fatherName}</Text>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text} >CNIC No: {application?.cnic}</Text>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text} >Number Of Family Members: {application?.members}</Text>
         </View>
         <View style={styles.textView}>
           <Text style={styles.text} >Food Requirement: {application?.food}</Text>
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
  textView: {
      textAlign: 'center',
      marginBottom: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 16, 
  }
})

export default CurrentApplication;