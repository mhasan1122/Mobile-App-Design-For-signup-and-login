import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("../assets/ll.jpeg")} style={{ height: '100%' }}>
        <View style={{ position: "absolute" }}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({});
