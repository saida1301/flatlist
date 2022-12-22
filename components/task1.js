import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const task1 = () => {

const [counter, evetext] = useState(0)


  return (
    <View>
      <Text>task1 + {counter}</Text>
    <Button title='Change text' onPress={()=>evetext(counter + 2)} />
    </View>
  )
}

export default task1