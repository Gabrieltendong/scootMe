import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    btn_add: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: colors.LIGHT_BLUE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        marginTop: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    text_white: {
        marginLeft: 20,
        color: colors.WHITE,
        fontSize: 18
    }
})