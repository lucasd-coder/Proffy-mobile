import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingProffy from '../pages/OnboardingProffy';
import PageLogin from '../pages/PageLogin';
import CreateAccount from '../pages/CreateAccount';
import ConcludedRegister from '../pages/ConcludedRegister';
import { navigationRef } from '../services/RootNavigation';

const Auth = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Auth.Navigator screenOptions={{ headerShown: false }}>
                <Auth.Screen name="OnboardingProffy" component={OnboardingProffy}/>
                <Auth.Screen name="PageLogin" component={PageLogin} />
                <Auth.Screen name="CreateAccount" component={CreateAccount}/>
                <Auth.Screen name="ConcludedRegister" component={ConcludedRegister} />
            </Auth.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;