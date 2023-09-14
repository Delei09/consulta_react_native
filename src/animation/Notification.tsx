import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { Feather } from 'react-native-vector-icons'
import styles from "./styles";


export const Notification : React.FC = () => {

  const rotation = useSharedValue(0)
  const angle = -45

  const styleAnimatedRotation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`
        }
      ]
    }
  })

  function RunRotation<TouchableOpacityProps> (){
    console.log("notification")
    rotation.value = withRepeat(withTiming(angle, {duration: 180}),6, true)
  }

  return(
    <View style={styles.card}>
      <Text>Clique no sino:</Text>
      <TouchableOpacity onPress={RunRotation}>
        <Animated.View style={[styleAnimatedRotation]}>
          <Feather name='bell' size={32} color='black' />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}