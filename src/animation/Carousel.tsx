import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface IData {
  id: string,
  name: string
}

export const Carousel = () => {

  const carouselRef = useRef<null | FlatList >()
  const [indice, setIndice] = useState(0)
  const data: IData[] = [{
    id: '1',
    name: 'Teste 1'
  },{
    id: '2',
    name: 'Teste 2'
  },
  {
    id: '3',
    name: 'Teste 3'
  }]

  
  useEffect(() => {
    carouselRef.current.scrollToIndex({index: indice})
    const interval = setInterval(() => {
        changePosition()
    },2000)

    return () => clearInterval(interval)
  },[indice])

  function changePosition(){
      if (indice < data.length - 1){
          setIndice(indice + 1)
      }else{
          setIndice(0)
      }
  }
  
  return(
    <View style={ { height: 100, width:  Dimensions.get("window").width, paddingLeft: 0}}>
      <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(data:IData) => data.id}
              renderItem={({index, item}) => (
                <View style={[styles.card, 
                  index == data.length-1 ? {marginRight: 300} : null ]}>
                  <Text>{item.id}</Text>
                  <Text>{item.name}</Text>
                </View>
              )}
              ref={carouselRef}
            />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    width: RFPercentage(40),
    backgroundColor: '#053dca',
    flexDirection: "row"
  }
})