import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const task3 = () => {

const [size, setSize] = useState(12)

 let x = Math.floor((Math.random() * 100) + 1);
  return (
    <View>
      <Text style={{fontSize:size}}>task3</Text>
    <Button title="Change text" onPress={() => setSize(x)} />
    </View>
  )
}

export default task3