import { View, Text } from 'react-native'
import React from 'react'
import doctors from '../api/doctors'
import DoctorsList from '../components/DoctorsList'

export default function Home() {
  return (
    <View>
      <DoctorsList doctors={doctors}/>
    </View>
  )
}