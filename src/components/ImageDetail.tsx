import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface ImageProps {
    title: string
}

export const ImageDetail: React.FC<ImageProps> = (props: ImageProps) => {
    return <Text>{props.title}</Text>
}

const styles = StyleSheet.create({})