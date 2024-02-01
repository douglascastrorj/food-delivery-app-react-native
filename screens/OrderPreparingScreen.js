import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparingScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 3000)
    }, [])
    return (
        <View className='flex-1 bg-white justify-center items-center'>
            <Image
                className='w-80 h-80'
                source={require('../assets/images/delivery.gif')} 
            />
        </View>
    )
}