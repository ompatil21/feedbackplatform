import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();

  // Dummy data for demonstration purposes
  const userData = {
    name: "OM PATIL",
    email: "OM@example.com",
    phone: "+1234567890",
    address: "1234 Street Name, City, Country",
    description: "A brief description about OM PATIL. Enjoys hiking, reading, and coding in React Native."
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isAuthenticated');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
      console.error('Logout error:', error);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
        { text: 'Yes', onPress: handleLogout },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/om.jpeg")}
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <Text style={styles.userPhone}>{userData.phone}</Text>
        <Text style={styles.userAddress}>{userData.address}</Text>
        <Text style={styles.userDescription}>{userData.description}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'flex-end',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#E96E6E',
  },
  userInfo: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  userEmail: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 10,
  },
  userAddress: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 10,
    textAlign: 'center',
  },
  userDescription: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#E96E6E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
