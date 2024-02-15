import React from 'react';
import { Button,View, Text,} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
        <Text> This is Controlled Profile Screen</Text>
        <Button title='cotrolled' onPress={()=>navigation.navigate("Home")}/>
    </View>
     
  );
};
export default ProfileScreen;





