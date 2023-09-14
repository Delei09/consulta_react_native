import React from "react";
import { LayoutAnimation, Text, View } from "react-native";
import styles from "./styles";

export const Spring: React.FC = () => {

  const springAnimation = {
    duration: 1500,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }
  }

  LayoutAnimation.configureNext(springAnimation)
  return(
    <>
      <Text style={styles.text}>A Tag LayoutAnimation Coloca uma animação quando a tela é 
      carregada</Text>
      <View style={styles.card} />
    </>
  )
}