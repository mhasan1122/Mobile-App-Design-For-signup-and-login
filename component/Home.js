import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Background from './Background'; // Corrected import statement
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import React from 'react';

const Home = (props) => {
  return (
    
      <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
          <Text style={{ color: 'white', fontSize: 64 }}>Lets start</Text>
          <Text style={{ color: 'white', fontSize: 64,marginBottom:40 }}>Coding</Text>
          <Btn bgcolor={green} textColor='white' btnLabel="Login" Press={()=>props.navigation.navigate("Login")} />
          <Btn bgcolor='white' textColor={darkGreen} btnLabel="SignUp" Press={()=>props.navigation.navigate("SignUp")}  />
        </View>
      </Background>
 
  );
};

export default Home;

const styles = StyleSheet.create({});
