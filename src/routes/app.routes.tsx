import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import { navigationRef } from '../services/RootNavigation';

const App = createStackNavigator();

function AppRoutes() {
    return (
        <NavigationContainer ref={navigationRef}>
            <App.Navigator screenOptions={{ headerShown: false }}>
                <App.Screen name="Landing" component={Landing} />
                <App.Screen name="GiveClasses" component={GiveClasses} />
                <App.Screen name="Study" component={StudyTabs} />
            </App.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes;