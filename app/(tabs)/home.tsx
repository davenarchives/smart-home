// Use SafeAreaView to automatically handle the status bar
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet } from 'react-native'
import React from 'react'
import TopSection from "../components/home/topSection"
import Weather from '../components/home/weather'
import Room from '../components/home/room'

const bgColor = "#1C1E22"
export default function home() {
  return (
    <SafeAreaView
      style={{ backgroundColor: bgColor, flex: 1 }}
      className='p-4'
    >
      <TopSection/>
      <Weather/>
      <Room/>
    </SafeAreaView>
  )
}

