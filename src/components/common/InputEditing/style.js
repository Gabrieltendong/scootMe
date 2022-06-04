import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input_wrapper: {
        minHeight: 50,
        backgroundColor: colors.LIGHT_BLUE,
        borderRadius: 15,
        paddingHorizontal: 15,
        color: '#f3f3f3'
    },
    label_wrapper: {
        color: colors.WHITE,
        fontSize: 18,
        marginBottom: 5
    },
    text_light_blue: {
        color: colors.WHITE,
        opacity: 0.5
    },
    margiLeft: {
        margiLeft: 10
    }
})