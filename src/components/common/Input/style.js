import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    input_wrapper: {
        minHeight: 50,
        backgroundColor: colors.LIGHT_BLUE,
        borderRadius: 15,
        paddingHorizontal: 15,
        color: colors.WHITE
    },
    label_wrapper: {
        color: colors.WHITE,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
    }
})