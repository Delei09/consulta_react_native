import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ICard  {
  backgroundColor : string;
} 

interface IIcon {
  color: string;
}

export const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.dark};
  padding: 20px;
  margin: 10px;

`

export const Card = styled.View`
  background-color: #a2a29d;
  width: 90%;
  height: 80px;
  padding: 10px;
  margin: 16px;
  border-radius: 10px;
`

export const Button = styled.Button`
  background-color: red;
  padding: 10px;
  height: 50px;
  border-radius: 10px;
  color: white;
  box-sizing: border-box;
`

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px;
  height: 50vh;
  border-radius: 10px;
  color: white;
  box-sizing: border-box;
`

export const Title = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
`

export const CardExtend = styled(Card)`
  background-color: #090909;
  flex-direction: row;
  gap: 16px;
`

export const CardCustomizable = styled(Card)<ICard>`
  background-color: ${(props) => props.backgroundColor};
`

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#dddd', '#000000']
})`
  width: 90%;
  height: 80px;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
`

export const Gradient2 = styled(LinearGradient)`
  width: 90%;
  height: 80px;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
`

export const IconFontAwesome = styled(FontAwesome)<IIcon>`
  color: ${(props) => props.color};
  font-size: 50px;
`;
