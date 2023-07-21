import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from '../components'
import { COLORS, SIZES, icons, images } from '../constants'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView, ScrollView, View } from 'react-native'

const Home = () => {
	const router = useRouter()

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerTitle: '',
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
					),
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}></View>
			</ScrollView>

			<Welcome />
			<Popularjobs />
			<Nearbyjobs />
		</SafeAreaView>
	)
}

export default Home
