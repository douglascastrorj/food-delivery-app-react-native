import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';


export default function RestaurantScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const item = params.restaurant;

    return (
        <View>
            <StatusBar barStyle='light-content' />
            <CartIcon />
            <ScrollView>
                <View className='relative'>
                    <Image className='w-full h-72' source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
                    >
                        <Icon.ArrowLeft strokeWidth={3} color={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    }}
                    className='bg-white p-6 -mt-12'
                >
                    <View className='px-5'>
                        <Text className='text-3xl font-bold'>{item.name}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <Image
                                    className='h-4 w-4'
                                    source={require('../assets/images/fullStar.png')}
                                />
                                <Text className='text-xs'>
                                    <Text className='text-green-700'>{item.stars}</Text>
                                    <Text className='text-gray-700'>
                                        ({item.reviews} review) · <Text className='font-semibold'>{item.category}</Text>
                                    </Text>
                                </Text>
                            </View>
                            <View className='flex-row items-center space-x-1'>
                                <Icon.MapPin color={'gray'} height={15} width={15} />
                                <Text className='text-xs text-gray-500'>Nearby· {item.address}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2'>{item.description}</Text>
                    </View>
                </View>

                <View className='pb-36 bg-white'>
                    <Text className='p-4 text-2xl font-bold'>
                        Menu
                    </Text>
                    {
                        item.dishes.map((dish, index) => {
                            return (
                                <DishRow key={index} dish={dish} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}