/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from "react";
import { View } from 'react-native';
import type {Node} from 'react';
import Banner  from './components/Banner';
import TopProducts from './components/TopProducts';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: () => Node = () => {
    return (
    <View>
        <Banner></Banner>
        <TopProducts></TopProducts>
    </View>
  );
};


export default App;
