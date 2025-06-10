
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

export default function TabLayout(){

    const insets = useSafeAreaInsets();

    return(
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', 
                tabBarStyle: {
                    paddingBottom: insets.bottom
                }
                }}>
                <Tabs.Screen 
                    name="galeria"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => 
                        <FontAwesome size={28} name="home" color={color} />,                
                    }}
                />
                <Tabs.Screen 
                    name="adicionar"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => 
                            <AntDesign name="pluscircle" size={28} color={color} />,                
                    }}
                />
                <Tabs.Screen 
                    name="perfil"
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => 
                        <AntDesign name="user" size={24} color={color} />,            
                    }}
                />
            </Tabs>
    )
}