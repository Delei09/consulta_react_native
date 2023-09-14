import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Animated, Easing } from "react-native";

export const Scale: React.FC = () => {

  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  function RunAnimation (){
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }),
    ]).start();
  }
  
  return(
    <View>
      <Animated.View style={{transform: [{scale: scaleAnim}]}}>
        <View style={styles.card} />
      </Animated.View>
      <View>
        <TouchableOpacity style={styles.button} onPress={RunAnimation}>
          <Text style={styles.text}>Iniciar Scale</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}