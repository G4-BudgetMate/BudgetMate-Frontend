import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <Text style={styles.greeting}>Hi, Jo!</Text>
      <Text style={styles.subtext}>How are you today?</Text>

      {/* Monthly Spending */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Monthly Spending</Text>
        <Text style={styles.amount}>Php 3,240</Text>
        <Text style={styles.change}>12% from last month</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See emergency fund</Text>
        </TouchableOpacity>
      </View>

      {/* Budget Status */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Budget Status</Text>
        <Text style={styles.status}>On Track</Text>
        <Text style={styles.usage}>68% of budget used</Text>
      </View>

      {/* Spending by Category */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Spending by Category</Text>
        <BarChart
          data={{
            labels: ['Entertainment', 'Transport', 'Food', 'Utilities', 'Others'],
            datasets: [{ data: [500, 400, 800, 300, 200] }],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>

      {/* Spending Trend */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Spending Trend</Text>
        <LineChart
          data={{
            labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [{ data: [3200, 3100, 3000, 2800, 2900, 3240] }],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  change: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28A745',
  },
  usage: {
    fontSize: 14,
    color: '#555',
  },
});

export default Home;