import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import * as Icon from 'react-native-feather';


export default function DishRow({dish, onRemove, onAdd}) {

  const [orderedCount, setOrderedCount] = useState(0)

  const onMinus = () => { 
    setOrderedCount(Math.max(0, orderedCount - 1));
    if(onRemove) onRemove(dish)
  }
  const onPlus = () => {
    setOrderedCount(orderedCount + 1);
    if(onAdd) onAdd(dish)
  }

  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
        <Image source={dish.image} style={{width: 100, height: 100}} className='rounded-3xl' />
        <View className='flex flex-1 space-y-3'>
            <View className='pl-3'>
                <Text className='text-xl'>{dish.name}</Text>
                <Text className='text-gray-700'>{dish.description}</Text>
            </View>
            <View className='flex-row justify-between pl-3 items-center'>
                <Text className='text-gray-700 text-lg font-bold'>$ {dish.price}</Text>
                <View className='flex-row items-center'>
                    <TouchableOpacity 
                        onPress={onMinus}
                        style={{backgroundColor: themeColors.bgColor(1)}}
                        className='p-1 rounded-full'>
                        <Icon.Minus strokeWidth={2} height={20} width={20} color={'white'} />
                    </TouchableOpacity>
                    <Text className='px-3'>
                        {orderedCount}
                    </Text>
                    <TouchableOpacity 
                        onPress={onPlus}
                        style={{backgroundColor: themeColors.bgColor(1)}}
                        className='p-1 rounded-full'>
                        <Icon.Plus strokeWidth={2} height={20} width={20} color={'white'} />
                    </TouchableOpacity>
                </View>
               
            </View>
        </View>
    </View>
  )
}