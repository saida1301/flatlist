import { View, Text,Button } from 'react-native'
import React, {useState} from 'react'

const task2 = () => {
 let x = Math.floor((Math.random() * 100) + 1);
const [counter, setfirst] = useState(0)



  return (
    <View>
      <Text>task2 + {counter}</Text>
      <Button title="Change text" onPress={() => setfirst(counter+ x)}/>
    </View>
  )
}

export default task2