import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { darkGreen } from './Constants';

const Field = ({ placeholder, secureTextEntry, ...restProps }) => {
  return (
    <TextInput
      {...restProps}
      placeholder={placeholder}
      style={[styles.input, restProps.style]} // Combine input style with any style passed through restProps
      placeholderTextColor={darkGreen}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 100,
    color: darkGreen,
    paddingHorizontal: 20,
    width: '65%',
    backgroundColor: 'rgb(220,220,220)',
    marginVertical: 10,
    marginRight: '10%',
    padding: '2%',
  },
});

export default Field;
