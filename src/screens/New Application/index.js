import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Picker,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import ImageSelector from '../../components/imagePicker';
import {
    auth,
    onAuthStateChanged,
    db,
    collection,
    doc,
    setDoc
} from "../../config/Firebase/Firebase.js";

const NewApplication = ({
    navigation
}) => {
    const [uid, setUid] = useState(null);
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [cnic, setCnic] = useState('');
    const [dob, setDob] = useState('');
    const [members, setMembers] = useState('');
    const [food, setFood] = useState('');
    const [userPic, setUserPic] = useState('');
    const [cnicFront, setCnicFront] = useState('');
    const [cnicBack, setCnicBack] = useState('');
    const [income, setIncome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUid(user.uid)
        })
    })

    const application = {
        name: name,
        fatherName: fatherName,
        cnic: cnic,
        dob: dob,
        members: members,
        food: food,
        userPic: userPic,
        cnicFront: cnicFront,
        cnicBack: cnicBack,
        income: income,
        uid: uid
    }

    const submit = async () => {
        setIsLoading(true); 
        const applicationsCol = collection(db, "applications");
        const applicationDoc = doc(applicationsCol, uid);
        await setDoc(applicationDoc, application);
        setIsLoading(false);
        alert("Application submitted!");
        navigation.navigate('All Applications');
    }
    return (
        <View>
            <ScrollView>
                <View>
                    <Text style={styles.title}>
                        Food Application Form
                    </Text>
                    <Text style={styles.subtitle}>
                        Enter correct information in the fields below to recieve food supply from Saylani
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput value={name} onChange={(e) => setName(e.target.value)} maxLength={30} autoFocus={true} placeholder="Name" style={styles.input} />
                    <TextInput value={fatherName} onChange={(e) => setFatherName(e.target.value)} maxLength={30} keyboardType="email-address" placeholder="Father Name" style={styles.input} />
                    <TextInput value={cnic} onChange={(e) => setCnic(e.target.value)} maxLength={15} placeholder="CNIC No" style={styles.input} />
                    <TextInput value={members} onChange={(e) => setMembers(e.target.value)} maxLength={3} placeholder="Family Members" style={styles.input} />
                    <TextInput value={income} onChange={(e) => setIncome(e.target.value)} maxLength={5} placeholder="Monthly Income" style={styles.input} />
                    <Picker
                        selectedValue={food}
                        style={[styles.input, {fontSize: 14, color: "#7d7d7d", border: "none"}]}
                        onValueChange={(itemValue) => setFood(itemValue)}
                    >
                        <Picker.Item label="Select Help Category" value={null} />
                        <Picker.Item label="Monthly Ration" value="monthly" />
                        <Picker.Item label="Daily (1 time) Ration" value="dailyOne" />
                        <Picker.Item label="Daily Ration (2 times)" value="dailyTwo" />
                        <Picker.Item label="Daily Ration (3 times)" value="dailyThree" />
                    </Picker>
                    <ImageSelector buttonText="Profile Pic" uriState={userPic} setUriState={setUserPic} />
                    <ImageSelector buttonText="CNIC Front Side" uriState={cnicFront} setUriState={setCnicFront} />
                    <ImageSelector buttonText="CNIC Back Side" uriState={cnicBack} setUriState={setCnicBack} />

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => submit()} activeOpacity={0.7}>
                        <Text style={styles.button}>
                            {isLoading ? <ActivityIndicator color="#fff" size="small" /> : "Submit"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        width: "100%",
        color: "#767e80",
        fontSize: 25,
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
        marginBottom: 60
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
});

export default NewApplication;