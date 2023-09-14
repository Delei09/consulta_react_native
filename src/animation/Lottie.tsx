import React, { useRef } from "react";
import dogAnimation from '../assets/animation_lmjhw18l.json'
import { Text, TouchableOpacity, View } from "react-native";
import LottieView from 'lottie-react-native';
import styles from "./styles";

export const Lottie: React.FC = () => {

  const animationRef = useRef<LottieView>()
  function RunAnimation (){
    animationRef.current.play()
  }
  
  return(
    <View>
      <LottieView
        source={dogAnimation}
        loop={false}
        autoPlay={false}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        ref={animationRef}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={RunAnimation}>
          <Text style={styles.text}>Iniciar Animação</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}