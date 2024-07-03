import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const FeedbackAnalysisScreen = () => {
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.header}>
        <Header isCart={false} />
      </View>
      <Text style={styles.heading}>Pictoral representation of the Feedback</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Positive Review Graph</Text>
        <View style={styles.graphPlaceholder}>
          <Text style={styles.graphTypeText}>Line Chart</Text>
        </View>
        <Text style={styles.heading}>Neutral Review Graph</Text>
        <View style={styles.graphPlaceholder}>
          <Text style={styles.graphTypeText}>Bar Chart</Text>
        </View>
        <Text style={styles.heading}>Negative Review Graph</Text>
        <View style={styles.graphPlaceholder}>
          <Text style={styles.graphTypeText}>Line Chart</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default FeedbackAnalysisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {},
  contentContainer: {
    paddingBottom: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 20,
    textAlign: 'center',
    color: "#333",
  },
  graphPlaceholder: {
    height: 220,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphTypeText: {
    fontSize: 18,
    color: '#757575',
  },
});
