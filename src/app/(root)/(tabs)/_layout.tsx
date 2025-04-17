import { icons } from "@/constants";
import { Tabs } from "expo-router";
import { ImageSourcePropType, View, Image } from "react-native";

const TabIcon = ({
    source,
    focused,
} : {
    source: ImageSourcePropType;
    focused: boolean;
}) => (
    <View
        className={`flex flex-row justify-center items-center rounded-full ${ focused ? "bg-gray-100" : "" }
            `}
    >
        <View
            className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-green-400" : ""}`}
        >
            <Image 
                source={source}
                tintColor="white"
                resizeMode="contain"
                className="w-7 h-7"
            />
        </View>
    </View>    
);