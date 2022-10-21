import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logoUri = 'https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg';

const Banner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerchild}>
            <Image
                style={styles.bannerImage}
                resizeMode="contain"
                source={{ uri: logoUri }} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       width: "100%"
    },
    containerchild: {
       alignItems: 'center',
       marginTop:40
    },

    bannerImage: {
        position: 'absolute',
        width: 326,
        height: 140,
        paddingLeft: 45,
        top:50,
        borderRadius: 10,
    }
});

export default Banner;