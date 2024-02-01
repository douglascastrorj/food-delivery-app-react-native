import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {

    const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className='mt-4' >
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator='false'
            className='overflow-visible'
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
        >
            {
                categories.map((category, index) => {

                    const isActive = category.id == activeCategory;
                    return <Category onPress={() => setActiveCategory(category.id)} key={index}  category={category} isActive={isActive} />
                })
            }
        </ScrollView>
    </View>
  )
}

function Category({isActive, category, onPress}) {
    const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200'
    const textClass = isActive ? 'text-semibold font-gray-800' : 'text-gray-500'
    return (
        <View className='flex justify-center items-center mr-6'>
            <TouchableOpacity
                onPress={() => onPress()}
                className={`p-3 rounded-full ${btnClass}`}
            >
                <Image style={{width: 45, height: 45}} source={category.image} />
            </TouchableOpacity>
                <Text className={`text-sm ${textClass}`}>
                    {category.name}
                </Text>
        </View>    
    )
}