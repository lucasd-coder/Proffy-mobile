import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import OnboardingProffy from '../pages/OnboardingProffy';
import PageLogin from '../pages/PageLogin';
import CreateAccount from '../pages/CreateAccount';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="OnboardingProffy" component={OnboardingProffy}/>
                <Screen name="PageLogin" component={PageLogin} />
                <Screen name="CreateAccount" component={CreateAccount}/>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;