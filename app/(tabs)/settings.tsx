import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import React from 'react'

const bgColor = "#1C1E22"
export default function settings() {
  return (
    <SafeAreaView
      style={{ backgroundColor: bgColor, flex: 1 }}
    >
      <Text>Setting</Text>
    </SafeAreaView>
  )
}