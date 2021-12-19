import React from 'react';
import Signup from '../../screens/Signup';
import Login from '../../screens/Login';
import ResetPassword from '../../screens/Reset Password';
import ChangePassword from '../../screens/Change Password';
import ApplicationStack from './applicationStack';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
            <Stack.Navigator initialRouteName="Signup">
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ title: 'Sign Up' }} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }} />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{ title: 'Reset Password' }} />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{ title: 'New Password' }} />
                <Stack.Screen
                    name="ApplicationStack"
                    component={ApplicationStack}
                    options={{headerShown: false}} />
            </Stack.Navigator>
    )
}

export default MainStack;