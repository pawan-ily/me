import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TrendingMeme, useApi } from '../hooks/useApi';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import { Center,Heading,ScrollView, Skeleton, VStack, useTheme } from 'native-base';
import Swiper from 'react-native-swiper';
const $HomeScreen = () => {
    const theme =useTheme()
    const {getTrending} =useApi();
    const [memes,setMemes] =useState<TrendingMeme[] |null >(null)
    const [loading,setLoading] =useState(true);
    const styles = StyleSheet.create({
        wrapper: {
            height:500
        },
        slide1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9DD6EB'
        },
        slide2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5'
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9'
        },
        text: {
          color: theme.colors.primary[500],
          fontSize: 30,
          fontWeight: 'bold'
        }
      })
    useEffect(()=>
    {
        const loadMemes = async ()=>
        {
            const results =await  getTrending();
            console.log(results)
            setMemes(results)
            setLoading(false);
        }
        loadMemes();
    },[])
  return (
    <ScrollView>
        {
            loading && 
            (
                <Center w="100%" mt={8}>
                    <Text>
                        DEBUG
                    </Text>
                    <VStack w="90%" space={4}>
                        <Skeleton.Text px={2}/>
                        <Skeleton  h="80"/>
                    </VStack>
                    </Center>
            
            )
            }
            {
                !loading && (
                    <Swiper showsButtons={true}
                    showsPagination={true}
                    style={styles.wrapper}  >
                        {memes?.map((meme,index)=>
                        (
                        <View key={index}>
                                <VStack alignItems={"center"} space={6} mt={4}>
                                    <Heading style={styles.text}>
                                        {meme.title}
                                    </Heading>
                                    <Image source={{uri:meme.url}} 
                                      resizeMode="contain"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                    style={{width:"95%" , height:300}}
                                  />
                                    
                                </VStack>
                                </View>

                                ))}

                        
                    </Swiper>
                )
            }
            <Heading>
                Test
            </Heading>
            </ScrollView>
    )
}

export default $HomeScreen
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })