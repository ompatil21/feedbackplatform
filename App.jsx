import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screen/HomeScreen';
import FeedbackAnalysisScreen from './src/screen/FeedbackAnalysisScreen';
import DataReview from './src/screen/DataReview';
import AccountScreen from './src/screen/AccountScreen';
import UploadFeedbackScreen from './src/screen/UploadFeedbackScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import Loader from './src/components/Loader';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await AsyncStorage.getItem('isAuthenticated');
      setIsAuthenticated(authStatus === 'true');
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeedbackAnalysis" component={FeedbackAnalysisScreen} />
        <Stack.Screen name="DataReview" component={DataReview} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="UploadFeedback" component={UploadFeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





