import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


const StateSample = () => {

 

  const [cityList, setItems] = useState(cities)

   const filterEvenResults = () => {

const x = cityList.shift();

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