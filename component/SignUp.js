import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen, green } from './Constants'
import Field from './Field'
import Btn from './Btn'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignUp = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 440 }}>
        <Text style={{ color: "white", fontSize: 54, fontWeight: 'bold', marginVertical: 10, marginRight: '20%' }}>
          Register </Text>
          <Text style={{color:'white',fontSize:19,marginRight:'25%'}}> Create a new account</Text>
        <View style={{ backgroundColor: "white", height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center', marginRight: '10%' }}>
          
          <Field placeholder="First Name"  />
          <Field placeholder="Last Name"  />
          <Field placeholder="Contract Number" />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View style={{flexDirection:'row',display:"flex",}}>

          <Text style={{ fontSize: 12, color: 'gray',  marginRight:12}}>By Siging in, you agree to our</Text>
          <Text style={{ color:  darkGreen , fontSize: 12, fontWeight: 'bold', }}>Terms & conditions</Text>
          </View>
          

          {/* <View style={{ alignItems: 'flex-end', paddingLeft: 90, marginBottom: 70, }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forget Password?</Text>
          </View> */}
          <Btn textColor='white' bgcolor={darkGreen} btnLabel="SignUp" Press={() =>{alert("Account Created")
        props.navigation.navigate('Login')} }></Btn>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Alredy Have an account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </Background>
  )
}





export default SignUp

