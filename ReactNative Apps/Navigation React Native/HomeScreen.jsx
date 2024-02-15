import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';



const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Text> This is Controlled HomeScreen Screenugti9u</Text>
        <TouchableOpacity
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      ><Text>Arrow</Text></TouchableOpacity>
       
    </View>

     
  );
};

export default HomeScreen;





