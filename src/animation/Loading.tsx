import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";

export const Loading: React.FC = () => {

  return(
    <View style={[styles.card]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}