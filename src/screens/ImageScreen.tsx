import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ImageDetail } from '../components/ImageDetail'

export const ImageScreen: React.FC = () => {
    return <View>
        <ImageDetail title="Forest" />
        <ImageDetail title="Mountains" />
        <ImageDetail title="Beach" />
        <ImageDetail title="Clouds" />
    </View>
}

const styles = StyleSheet.create({})