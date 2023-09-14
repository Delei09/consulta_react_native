import React from "react";
import {ScrollView, Text, View } from "react-native";
import style from './styles'
import { Notification } from "./Notification";
import { Loading } from "./Loading";
import { FadeInAnimated } from "./FadeIn";
import { Carousel } from "./Carousel";
import { Skeleton } from "./Shimmer";
import { Lottie } from "./Lottie";
import { Scale } from "./Scale";
import { Spring } from "./Spring";


export const Animation = () => {

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>Spring Animation</Text>
      <Spring/>
      
      <Text style={style.title}>Loading</Text>
      <Loading />

      <Text style={style.title}>Reanimated</Text>
      <Notification />

      <Text style={style.title}>Carousel</Text>
      <Carousel />

      <Text style={style.title}>Fade In / Fade Out</Text>
      <FadeInAnimated />

      <Text style={style.title}>Shimmer - Skeleton</Text>
      <Skeleton />

      <Text style={style.title}>Lottie</Text>
      <Lottie />

      <Text style={style.title}>Scale</Text>
      <Scale />

      <Text style={style.title}>Screen Suave</Text>
    </ScrollView>
  )
}
