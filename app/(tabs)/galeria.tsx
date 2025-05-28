import { MyImages } from "@/types/Models/image"
import { api } from "@/utils/api"
import { useEffect, useState } from "react"
import { FlatList, Image, StatusBar, Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Buffer } from 'buffer';
export default function Home(){

    const [images, setImages] = useState<MyImages[]>([])

    useEffect(()=>{
        fecthImages()
    },[])

    async function fecthImages() 
    {
        const response = await api.get('/imagens')
        setImages(response.data)
    }

    return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#313743'}}>
                    <FlatList
                        data={images}
                        columnWrapperStyle={{justifyContent: "space-around"}}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#fff'}}>
                                    Nenhuma imagem cadastrada
                                </Text>
                            </View>
                        }
                        ItemSeparatorComponent={()=> (
                            <View style={{height: 10, width: 10}}></View>
                        )}
                        renderItem={({item}) => {
                            const base64String = Buffer.from(item.data).toString('base64');
                            const imageUri = `data:image/png;base64,${base64String}`;
                            return <Image source={{uri: imageUri}} width={180} height={180}/>
                        }}
                        keyExtractor={image => image.id.toString()}
                    />
            </SafeAreaView>
    )
}
