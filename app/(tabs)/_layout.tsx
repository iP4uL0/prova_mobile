
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen 
                name="index"
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
                        <AntDesign name="pluscircle" size={28} color="black" />,                
                }}
            />
            <Tabs.Screen 
                name="perfil"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => 
                    <AntDesign name="user" size={24} color="black" />,            
                }}
            />
        </Tabs>
    )
}