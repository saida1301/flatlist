import {Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'


const Card = ({name, image, number, moment}) => (
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",  borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginBottom: 30, padding:10}}>
       <Image
        style={{width:30, height:30, borderRadius:15}}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text>{name}</Text>
        <View>
        <Text>{number}Mb  * Used {moment} </Text>
        </View>
      </View>
      <TouchableHighlight  onPress={()=>{
    alert('You tapped the button!')
  }}
                style={styles.keywordBox} 
                >
                <Text style={styles.keywordText} >Open</Text>
            </TouchableHighlight>
    </View>
  )


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }, 
    keywordText: {
      fontFamily: 'Bebas Neue', 
      fontSize: 18, 
      padding: 6, 
      fontWeight: 'bold',
      color: 'green', 
      letterSpacing: 1.5,
      textAlign: 'center'
  }, 
  keywordBox: {
      backgroundColor: 'transparent',
      margin: 3, 
      borderColor: 'green', 
      borderWidth: 1,
  },
  });

export default Card