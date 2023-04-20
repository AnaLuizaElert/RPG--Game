import React from  "react";
import { View, Text, Button} from 'react-native';

export default function Test({navigation}){
    return(
        <View>
            <Text> Test </Text>
            <Button
            title="Game"
            onPress={() => navigation.navigate('Game') }
            />
        </View>
    )
}