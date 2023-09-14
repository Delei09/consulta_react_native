import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Feather } from 'react-native-vector-icons'
import { Animated, Easing } from "react-native";

export const FadeInAnimated : React.FC = () => {

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const runFadeIn = () => {
    Animated.timing(fadeAnim,{
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  };

  const runFadeOut = () => {
    Animated.timing(fadeAnim,{
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start()
  };

  return(
    <View>
      <View style={styles.card}>
        <Animated.View style={{opacity: fadeAnim, flexDirection: 'row'}}>
          <Feather name='download' size={32} color='black' />
          <Feather name='download' size={32} color='black' />
          <Feather name='download' size={32} color='black' />
          <Feather name='download' size={32} color='black' />
          <Feather name='download' size={32} color='black' />
          <Feather name='download' size={32} color='black' />
          <Feather name='download' size={32} color='black' />
        </Animated.View>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={runFadeIn} style={styles.button}>
          <Text style={styles.text}>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={runFadeOut} style={styles.button}>
          <Text style={styles.text}>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
