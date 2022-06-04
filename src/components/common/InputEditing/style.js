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
        color: '#777'
    },
    label_wrapper: {
        color: colors.WHITE,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
    },
    text_white: {
        color: colors.WHITE
    }
})