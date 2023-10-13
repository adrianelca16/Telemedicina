import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import doctor1  from '../../assets/doctors/1.png'
import doctor2  from '../../assets/doctors/2.png'
import doctor3  from '../../assets/doctors/3.png'
import doctor4  from '../../assets/doctors/4.png'
import doctor5  from '../../assets/doctors/5.png'
import doctor6  from '../../assets/doctors/6.png'
import {LinearGradient} from 'expo-linear-gradient';

export default function DoctorsCard(props) {
    const {doctor}=props
    let image

    if (doctor.id == '1') {
        image = doctor1
    }else if(doctor.id == '2'){
        image = doctor2
    }else if(doctor.id == '3'){
        image = doctor3
    }else if(doctor.id == '4'){
        image = doctor4
    }else if(doctor.id == '5'){
        image = doctor5
    }else if(doctor.id == '6'){
        image = doctor6
    }

    console.log(doctor.specialty)
  return (
    <TouchableWithoutFeedback onPress={()=>console.log('Voy al doctor')}>
        <View style={styles.card}>
        <View style={styles.spacing}>
            <LinearGradient 
            colors={['#0b484d', '#1e99b6', '#23c4bd']} 
            start={{ x: 0, y: 0.3 }}
            end={{ x: 0, y: 1 }}
            style={styles.bgStyles}
            >
                <View style={styles.containerName}>
                    <Text style={styles.name}>{capitalize(doctor.firstName)}</Text>
                    <Text style={styles.name}>{capitalize(doctor.lastName)}</Text>
                </View>
                <Image source={image} style={styles.image} />
                <Text style={styles.speciality}>{capitalize(doctor.specialty)}</Text>
            </LinearGradient>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}



const styles = StyleSheet.create({
    card:{
        flex: 1,
        height:130
    },
    spacing:{
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    containerName:{
        flexDirection: 'row',
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 10
    },
    name:{
        color: '#fff',
        fontSize: 20,
        paddingTop: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    speciality:{
        color: '#fff',
        fontSize: 15,
        paddingTop: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        height: 90,
        width: 90
    }
})