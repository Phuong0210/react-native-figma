import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList, ScrollView} from "react-native";


const TopProducts = () => {
  const [products, setProducts] = useState([
    {
      id:0,
      name:'Sugar Substitute',
      img:require('./image/MaskGroup.png'),
      price:''
    },
    {
      id:1,
      name:'Juices & Vinegars',
      img:require('./image/MaskGroup2.png'),
      price:''
    },
    {
      id:2,
      name:'Vitamins Medicines',
      img:require('./image/image135.png'),
      price:''
    },
    {
      id:3,
      name:'Lyly vitamins',
      img:require('./image/image20.png'),
      price:''
    }
  ]);
    return(
        <View>
           <View style={styles.product}>
        <Text style={styles.title}>
          Diabetic Diet
        </Text>
        <ScrollView horizontal={true}>
        <FlatList
        horizontal
        data={products}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return <View
          style={{
            width: 110,
            height: 162,
            backgroundColor: '#F5F7FA',
            borderRadius: 10,
            marginRight: 16
          }}>
            <Image
              style={{
                width: 110,
                height: 100,
              }}
              source={item.img}/>
            <Text
              style={{
                width: 60,
                fontSize: 13,
                fontWeight: '400',
                color: '#090F47',
                lineHeight: 18
              }}>{item.name}</Text>
          </View>
        }}>
        </FlatList>
        </ScrollView>
      </View>
        </View>
      )

};
const styles =  StyleSheet.create({
 
  product:{
    flex:1,
  },
  title:{
    marginTop: 19,
    marginBottom: 16,
    color: '#090F47',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20
  },
  allProducts:{
    flex:2,
  },
  titlePro:{
    marginTop: 15,
    marginBottom: 24,
    color: '#090F47',
    fontSize:16,
    fontWeight: '600',
    lineHeight: 20
  },
  bgListProducts:{
    flex:1,
    flexDirection: 'column',
    width: 157,
    height: 250,
    backgroundColor: '#FFFFFF',
    marginRight: 14,
    marginBottom: 16
  },
  proName:{
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    color: '#090F47'
  },
  proPrice:{
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#090F47',
  },
  img:{
    margin: 20
  }
});


export default TopProducts;