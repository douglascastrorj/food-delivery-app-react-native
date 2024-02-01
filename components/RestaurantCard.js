import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';


export default function RestaurantCard({restaurant}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={ () => navigation.navigate('Restaurant', {restaurant}) }
    >
      <View 
        style={{
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7
        }}
        className='bg-white mr-6 rounded-3xl shadow-lg'>
        <Image className='h-36 w-64 rounded-t-xl'  source={restaurant.image}/>
        <View className='px-3 pb-4 space-y-2'>
            <Text className='text-lg font-bold pt-2'>{restaurant.name}</Text>
            <View className='flex-row items-center space-x-1'>
                <Image 
                    className='h-4 w-4' 
                    source={require('../assets/images/fullStar.png')} 
                />
                <Text className='text-xs'>
                    <Text className='text-green-700'>{restaurant.stars}</Text>
                    <Text className='text-gray-700'>
                        ({restaurant.reviews} review) · <Text className='font-semibold'>{restaurant.category}</Text>
                    </Text>
                </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
                <Icon.MapPin color={'gray'} height={15} width={15} />
                <Text className='text-xs text-gray-500'>Nearby· {restaurant.address}</Text>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}