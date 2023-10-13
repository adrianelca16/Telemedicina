import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import DoctorsCard from './doctors/DoctorsCard'

export default function DoctorsList(props) {
    const {doctors} = props
  return (
    <FlatList
    data={doctors}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(doctors) => String(doctors.id)}
    renderItem={({item}) => <DoctorsCard doctor={item}/>}
    contentContainerStyle={styles.flatListConatiner}
    />
  )
}

const styles = StyleSheet.create({
    flatListConatiner: {
      paddingHorizontal: 5,
      marginTop: Platform.OS === "android" ? 30 : 0
    },
  })
  