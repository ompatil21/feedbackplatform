import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Tags from "../components/Tags";
import FeedbackCard from "../components/FeedbackCard";
import data from "../data/feedbackData.json";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedbackAnalysisScreen from './FeedbackAnalysisScreen';
import DataReview from './DataReview';
import AccountScreen from './AccountScreen';
import UploadFeedbackScreen from './UploadFeedbackScreen';

const Tab = createBottomTabNavigator();

const HomeTab = ({ navigation }) => {
  const [feedbacks, setFeedbacks] = useState(data.feedbacks);

  const handleFeedbackDetails = (item) => {
    navigation.navigate("FEEDBACK_DETAILS", { item });
  };

  const navigateToUpload = () => {
    navigation.navigate("UploadFeedback");
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View>
            <Header />
            <View>
              <Text style={styles.headingText}>Welcome to the Feedback Platform</Text>
              <View style={styles.inputContainer}>
                <Icon name="search-outline" size={26} color="#8b9cb5" style={styles.searchIcon} />
                <TextInput placeholder="Search Feedback" style={styles.textInput} />
              </View>
            </View>
            <Tags />
            <TouchableOpacity style={styles.uploadButton} onPress={navigateToUpload}>
              <Text style={styles.uploadButtonText}>Upload Feedback</Text>
            </TouchableOpacity>
          </View>
        }
        data={feedbacks}
        numColumns={2}
        renderItem={({ item }) => (
          <FeedbackCard
            item={item}
            handleFeedbackClick={handleFeedbackDetails}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'FeedbackAnalysis') {
            iconName = 'stats-chart-outline';
          } else if (route.name === 'DataReview') {
            iconName = 'analytics-outline';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeTab} options={{ headerShown:false}} />
      <Tab.Screen name="FeedbackAnalysis" component={FeedbackAnalysisScreen} options={{ tabBarLabel: 'Feedback Analysis' }} />
      <Tab.Screen name="DataReview" component={DataReview} options={{ tabBarLabel: 'Data Review' }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarLabel: 'Account' }} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingText: {
    fontSize: 32,
    color: "#1a1a1a",
    marginVertical: 25,
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  uploadButton: {
    backgroundColor: "#007BFF",
    borderRadius: 12,
    marginVertical: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  uploadButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Poppins-Bold",
  },
});
