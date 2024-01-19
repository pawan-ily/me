import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import $HomeScreen from './components/HomeScreen';
import $About from './components/About';
import $CreatorScreen from './components/CreatorScreen';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Center,Heading, Text } from "native-base";
import { Pressable } from 'native-base';
const Drawer = createDrawerNavigator();
import { 
  NativeBaseProvider,
   Box, 
   extendTheme,
    VStack, 
    HStack, 
    Icon
   } from "native-base";
import { transparentize } from 'native-base/lib/typescript/theme/tools';
const theme =extendTheme({})
const CustomDrawerContent=(props:any)=>
{
  return <DrawerContentScrollView {...props}>
    <Center>
      <Heading color={'secondary.500'}>Menu</Heading>
    </Center>
      <VStack my={2}  mx={1} space={5}>
        {props.state.routeNames.map((name:string,index:number)=>(
          <Pressable onPress={(event)=>props.navigation.navigate(name)}
          key={index}
          px={5}
          rounded={"md"}
          bg={index===props.state.index ? 'secondary.100' :'transparent'}>
            <HStack  p={2}  space={7} alignItems="center"  >
              <Icon
              size={5}
              color={
                index===props.state.index ? 'secondary.500': 'gray.700'}
                as={
                  <MaterialCommunityIcons name={getIcon(name)}></MaterialCommunityIcons>
                }
                ></Icon>
                <Text fontWeight={500} color={
                  index===props.state.index ?'secondary.500':'gray.700'}>{name}</Text>
            </HStack>
          </Pressable>))
          }
</VStack>
</DrawerContentScrollView>
}
const getIcon =(screenName:string)=>{
  switch(screenName)
  {
    case 'Home':
      return 'home'
    case 'About':
      return 'information'
      case 'CreatorScreen':
        return 'fire'  
        default:
          return undefined
  }
}
export default function App() {
  const headerStyle = 
  {
    headerStyle:
    {
      backgroundColor:theme.colors.secondary[600]
    }
  } 
  return (
   <NativeBaseProvider theme={theme}>
     <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator 
         drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
          <Drawer.Screen name='Home' component={ $HomeScreen }
          options={{
            title:"Meme Generator",
           ...headerStyle
          }}
          />
          <Drawer.Screen name='CreatorScreen'  component={$CreatorScreen}
              options={{
                title:"Trending Memes",
                ...headerStyle
              }}
              
              />
          <Drawer.Screen name='About'component={ $About }/></Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
   </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
