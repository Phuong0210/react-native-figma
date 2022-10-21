import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph,Text,View } from 'react-native-paper';
const TopProducts = () => {
    return (
        <View>
            <Card style={Styles.container}>
                <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} />
                <Card.Content>
                    <Paragraph>Sugar Substitute</Paragraph>
                </Card.Content>
                {/* <Card.Actions>
            <Button>Add To Favourites</Button>
            </Card.Actions> */}
            </Card>
            <Card style={Styles.container}>
            <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} />
            <Card.Content>
                <Paragraph>Sugar Substitute</Paragraph>
            </Card.Content>
            {/* <Card.Actions>
          <Button>Add To Favourites</Button>
        </Card.Actions> */}
        </Card>
        </View>        
        
    );


};
const Styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        margin: 37,
        position: 'absolute',
        width: 140,
        height: 162,
        left: 24,
        top: 289,
        border:'2px solid black',
        borderRadius: 10,

    },
    imagecard: {

    },
    topProducts: {
        textAlign: 'center',
        color: 'white',
    }
})
export default TopProducts;