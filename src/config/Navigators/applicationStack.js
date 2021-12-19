import React from 'react';
import NewApplication from '../../screens/New Application';
import CurrentApplication from '../../screens/Current Application';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const ApplicationStack = () => {
    return (
        <Drawer.Navigator initialRouteName="CurrentApplication">
            <Drawer.Screen
                name="NewApplication"
                component={NewApplication}
                options={{ title: 'New Application' }} />
            <Drawer.Screen
                name="CurrentApplication"
                component={CurrentApplication}
                options={{ title: 'Current Application' }} />
        </Drawer.Navigator>
    )
}

export default ApplicationStack;