import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import * as Icon from 'react-native-feather';
import { themeColors } from "../theme";
import SearchRestaurants from "../components/SearchRestaurants";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";

export function HomeScreen() {
  return (
    <SafeAreaView className='bg-white'>
        <StatusBar barStyle='dark-content' />
        <SearchRestaurants />

        {/* main */}
        <ScrollView 
            showsVerticalScrollIndicator='false'
            contentContainerStyle={{
                paddingBottom: 20
            }}
        >
            <Categories />

            {/* featured */}
            <View className='mt-5'>
                {
                    [featured, featured, featured].map((item, index) => {

                        return (
                            <FeaturedRow 
                                key={index} 
                                title={item.title} 
                                restaurants={item.restaurants} 
                                description={item.description} 
                            />
                        )
                    })

                }
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}