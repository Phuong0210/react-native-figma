import React, {useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList, ScrollView} from "react-native";


export default function Products() {
  
  const [listProducts, setListProducts] = useState([
    {
      id:0,
      name:'Accu-check Active Test Strip',
      img:require('./image/image135.png'),
      price:'112'
    },
    {
      id:1,
      name:'Omron HEM-8712 BP Monitor',
      img:require('./image/image20.png'),
      price:'150'
    },
    {
      id:2,
      name:'Accu-check Active Test Strip',
      img:require('./image/image21.png'),
      price:'112'
    },
    {
      id:3,
      name:'Omron HEM-8712 BP Monitor',
      img:require('./image/image22.png'),
      price:'150'
    }
  ]);
  return(
    <View>
      <View style={styles.allProducts}>
        <Text style={styles.titlePro}>All Products</Text>
        <ScrollView>
          <FlatList
          numColumns={2}
          data={listProducts}
          keyExtractor={item => item.name}
          renderItem = {({item}) => {
            return <View style={styles.bgListProducts}>
              <View style={{
                width: 167,
                height: 158,
                backgroundColor: '#F5F7FA'
              }}>
                <Image
                style={styles.img}
                source={item.img}
                />
              </View>
              <Text style={styles.proName}>{item.name}</Text>
              <Text style={styles.proPrice}>${item.price}</Text>
            </View>
          }}>
          </FlatList>
        </ScrollView>
      </View>
    </View>
  );
}
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
