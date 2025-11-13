import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'

interface Room {
  id: string
  name: string
  devices: number
  image: any
}

export default function room() {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: '1',
      name: 'Kitchen',
      devices: 2,
      image: require('../../../assets/images/kitchen.png'),
    },
    {
      id: '2',
      name: 'Bedroom',
      devices: 4,
      image: require('../../../assets/images/bedroom.png'),
    },
    {
      id: '3',
      name: 'Living Room',
      devices: 7,
      image: require('../../../assets/images/living-room.png'),
    },
    {
      id: '4',
      name: 'Study Room',
      devices: 3,
      image: require('../../../assets/images/study-room.png'),
    },
  ])

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="px-5 py-6 gap-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-2xl font-bold text-white">Your Rooms</Text>
          <TouchableOpacity className="bg-gray-700 rounded-full p-2">
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Rooms Grid */}
        <View className="gap-4">
          {/* Row 1 */}
          <View className="flex-row gap-4">
            {rooms.slice(0, 2).map((room) => (
              <TouchableOpacity
                key={room.id}
                className="flex-1 rounded-2xl p-5 items-center gap-4"
                style={{ backgroundColor: '#363333' }}
              >
                {/* Room Image Circle */}
                <View className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-500">
                  <Image
                    source={room.image}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>

                {/* Room Name */}
                <Text className="text-lg font-bold text-white text-center">
                  {room.name}
                </Text>

                {/* Device Count */}
                <Text className="text-sm text-gray-400">
                  {room.devices} devices
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 2 */}
          <View className="flex-row gap-4">
            {rooms.slice(2, 4).map((room) => (
              <TouchableOpacity
                key={room.id}
                className="flex-1 rounded-2xl p-5 items-center gap-4"
                style={{ backgroundColor: '#363333' }}
              >
                {/* Room Image Circle */}
                <View className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-500">
                  <Image
                    source={room.image}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>

                {/* Room Name */}
                <Text className="text-lg font-bold text-white text-center">
                  {room.name}
                </Text>

                {/* Device Count */}
                <Text className="text-sm text-gray-400">
                  {room.devices} devices
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}