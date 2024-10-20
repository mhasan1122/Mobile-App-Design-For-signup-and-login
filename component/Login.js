import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen ,green  } from './Constants'
import Field from './Field'
import Btn from './Btn'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = (props) => {
  return (
    <Background>
      <View style={{alignItems:"center", width:440}}>
      <Text style={{color:"white",fontSize:54,fontWeight:'bold',marginVertical:10,marginRight:'20%'}}>
        Login </Text>
        <View style={{backgroundColor:"white",height:700,width:460,borderTopLeftRadius:130 ,paddingTop:100,alignItems:'center',marginRight:'10%'}}>
        <Text style={{ fontSize: 40, color: {darkGreen}, fontWeight: "bold" }}>Welcome Back</Text>
            <Text style={{color:'grey',fontSize:16 ,fontWeight:'bold',marginBottom:30}}>Login to Your account</Text>
            <Field placeholder="Email/username" keyboardType={"email-address"}/>
            <Field placeholder="Password" secureTextEntry={true}/>

            <View style={{alignItems:'flex-end',paddingLeft:90,marginBottom:70,}}>
                <Text style={{color:darkGreen,fontWeight:'bold',fontSize:16}}>Forget Password?</Text>
            </View>
            <Btn textColor='white' bgcolor={darkGreen}btnLabel="Login" Press={()=>alert("Logged In")}></Btn>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Don't Have an account? </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                  <Text style={{color:darkGreen, fontWeight:'bold',fontSize:16}}>SignUp</Text>
                  </TouchableOpacity>
            </View>
        </View>
      </View>

    </Background>
  )
}

export default Login

const styles = StyleSheet.create({})
