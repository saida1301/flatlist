import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const task8 = () => {

const [counter, evetext] = useState(0)


if(counter==100){
  evetext(0)
}

  return (
    <View>
      <Text>task8 + {counter}</Text>
    <Button title='Change text' onPress={()=>evetext(counter + 10)} />
    </View>
  )
}

export default task8