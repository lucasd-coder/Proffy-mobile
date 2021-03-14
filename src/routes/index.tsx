import React,{ useEffect } from 'react';
import { useSelector  } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import AsynsStorage from '@react-native-community/async-storage';

import { Store } from '../services/RootState';
import api from '../services/api';

import OnboardingProffy from '../pages/OnboardingProffy';
import PageLogin from '../pages/PageLogin';
import CreateAccount from '../pages/CreateAccount';
import ConcludedRegister from '../pages/ConcludedRegister';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import ConcludedRegisterProffy from '../pages/ConcludedRegisterProffy';

const Main = createStackNavigator();

function MainRoute() {
     const isLoggedIn = useSelector((state: Store) => state.auth.isLoggedIn);

     useEffect(() => {
          async function loadStoragedData(): Promise<void> {
            const token = await AsynsStorage.getItem('@Proffy:token');                                                                              
                            
            api.defaults.headers.authorization = `Bearer ${token}`;                                                        
          }      
          loadStoragedData();
        }, []);

     const auth = {
          onboardingProffy: OnboardingProffy,
          pageLogin: PageLogin,
          createAccount: CreateAccount,
          concludedRegister: ConcludedRegister,          
     }

     const user = {
          landing: Landing,
          giveClasses: GiveClasses,
          study: StudyTabs,
          concludedRegisterProffy: ConcludedRegisterProffy         
     }
           
     return (
          <Main.Navigator screenOptions={{ headerShown: false }} >
               {Object.entries({
                    ...(isLoggedIn ? user : auth)
               }).map(([nome, component]) => (
                    <Main.Screen key={nome} name={nome} component={component} />
               ))

               }
          </Main.Navigator>
     )
}

export default MainRoute;