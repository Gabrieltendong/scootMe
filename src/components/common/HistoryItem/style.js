import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export const styles = StyleSheet.create({
    container: {
        height: 130,
        borderRadius: 20,
        backgroundColor: colors.LIGHT_BLUE,
        marginVertical: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 10
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute',
        right: 20,
        top: -30,
        zIndex: 20
    },
    title: {
        color: colors.WHITE
    },
    rating: {
        marginVertical: 10
    },
    row: {
        flexDirection: 'row'
    },
    white_text: {
        color: colors.WHITE,
        marginHorizontal: 20,
        fontSize: 22
    }
})