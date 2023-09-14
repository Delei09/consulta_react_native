import React from "react";
import { Image, StyleSheet, View } from "react-native";
import styles from "./styles";
import shimmerGif from '../assets/shimmer.gif' 

export const Skeleton: React.FC = () => {

  return(
    <View style={[styles.card, {backgroundColor: 'blue', }]}>
      <Image source={shimmerGif} style={card.imageRound}/>
      <Image source={shimmerGif} style={card.card}/>
    </View>
  )
}

const card = StyleSheet.create({
  card: {
    width: 200,
    height: 40
  },
  imageRound: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overlayColor: 'blue',
    marginRight: 16,
  }
})