import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-blue-500'>
        <Text className='text-2xl text-white'>Faculdade Meta</Text>
    </View>
  );
}