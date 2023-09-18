import React from "react";
import { Card, CardCustomizable, CardExtend, 
  Container, Gradient, Gradient2, IconFontAwesome, Title, TouchableOpacity } from "./styles";

export const StyledComponents  = () => {
  {/* yarn add @types/styled-components-react-native -D */}
  return(
    <Container>
      <Card>
        {/* <Title>Install Styled Components</Title>
        <Title>yarn add styled-components</Title>
        <Title>yarn add @types/styled-components-react-native -D</Title> */}
        <Title>Install styled components in mode global</Title>
      </Card>

      <Card>
        <TouchableOpacity>
          <Title>Styled Components TouchableOpacity</Title>
        </TouchableOpacity>
      </Card>

      <CardExtend>
        <Title>Extend component Card</Title>
      </CardExtend>

      <CardCustomizable backgroundColor='#b5e5'>
        <Title>Customizable component Card</Title>
      </CardCustomizable>

      <Gradient2 colors={['#221010', '#d9d240']}>
        <Title>Lib external</Title>
      </Gradient2>

      <Gradient>
        <Title>Using attrs in Styled components</Title>
      </Gradient>

      <CardExtend>
        <IconFontAwesome name='facebook' color='green' />
        <IconFontAwesome name='plus' color='red' />
        <IconFontAwesome name='warning' color='yellow' />
      </CardExtend>
    </Container>
  )
}