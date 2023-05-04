import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { Landing } from "./src/components/Landing";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Landing />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
