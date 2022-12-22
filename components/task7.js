import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


const StateSample = () => {


  const [cityList, setItems] = useState(cities)

   const filterEvenResults = () => {
     let index = Math.floor(Math.random()*cityList.length)
 cityList.splice(index, 1);
 console.log(index)
  setItems([...cityList])
   }

  return (<>
    <View>
        <Button title='Show' onPress={()  => filterEvenResults()}></Button>
        {
            cityList.map((item) => <Text>{item}</Text>)
        }
    </View>
  </>)
}

export default StateSample