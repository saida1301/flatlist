import { View, Text } from 'react-native'
import React from 'react'



const header = (props) => {
  return (
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-around"}}>
      <Text>On this device</Text>
      <Text>last used</Text>
    </View>
  )
}

export default header