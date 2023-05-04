import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utls/colors";

export const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.searchResult}>
        <Text>This is the landing page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: "green",
    padding: 15,
  },
  searchResult: {
    flex: 1,
    backgroundColor: colors.red,
    padding: 15,
  },
});
