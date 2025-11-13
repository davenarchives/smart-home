import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { View, Text, Image } from 'react-native'
import React from 'react'

const userName = "User"
export default function topSection() {
  return (
    <View
        className="flex gap-y-6"
    >
        <View
            className="flex flex-row justify-between"
        >
            <Ionicons name="menu" size={40} color="white" />
            <MaterialIcons name="account-circle" size={40} color="white" />
        </View>

        <View>
            <Text className="text-white text-bold text-3xl">Hello {userName}!</Text>
            <Text className="text-white text-2xl">Welcome to Smart Home</Text>
        </View>
    </View>
  )
}