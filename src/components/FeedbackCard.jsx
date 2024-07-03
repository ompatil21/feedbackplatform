import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FeedbackCard = ({ item, handleFeedbackClick }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleFeedbackClick(item)}>
      <View style={styles.cardHeader}>
        <Text style={styles.feedbackTitle}>{item.title}</Text>
        <Text style={styles.feedbackDate}>{item.date}</Text>
      </View>
      <Text numberOfLines={3} style={styles.feedbackText}>
        {item.feedback}
      </Text>
    </TouchableOpacity>
  );
};

export default FeedbackCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    margin: 10,
    flex: 1,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  feedbackTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#333",
  },
  feedbackDate: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#999",
  },
  feedbackText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#666",
  },
});
