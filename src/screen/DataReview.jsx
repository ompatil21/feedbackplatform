import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DataReview = () => {
  // Dummy data for demonstration purposes
  const totalReviews = 120;
  const ratings = {
    1: 10,
    2: 20,
    3: 30,
    4: 25,
    5: 35,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feedback Review</Text>
      <Text style={styles.subheading}>Number of Reviews in the Last Month</Text>
      <Text style={styles.reviewCount}>{totalReviews}</Text>
      <Text style={styles.subheading}>Ratings Distribution</Text>
      <View style={styles.ratingContainer}>
        {Object.keys(ratings).map((star) => (
          <View key={star} style={styles.ratingRow}>
            <Text style={styles.starText}>{star} Star:</Text>
            <Text style={styles.countText}>{ratings[star]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DataReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  reviewCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  ratingContainer: {
    marginTop: 20,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  starText: {
    fontSize: 18,
    color: '#757575',
  },
  countText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});
