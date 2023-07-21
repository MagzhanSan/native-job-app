import styles from './screenheader.style'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
			<Image
				source={iconUrl}
				resizeMode='cover'
				style={styles.btnImg(dimension)}
			/>
		</TouchableOpacity>
	)
}

export default ScreenHeaderBtn
