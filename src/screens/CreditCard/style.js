import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    btn: {
        marginTop: 50
    },
    codeFieldRoot: {
        backgroundColor: colors.LIGHT_BLUE,
        borderRadius: 15,
        paddingHorizontal: 20,
        height: 50,
        alignItems: 'center'
    },
    cell: {
        color: colors.WHITE,
        fontSize: 18
    },
    label: {
       marginTop: 10,
       color: colors.WHITE,
       fontSize: 17,
       marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    col: {
        flex: 1,
        marginHorizontal: 10
    },
    picker: {
        backgroundColor: colors.LIGHT_BLUE,
        borderRadius: 15,
        height: 50,
        color: colors.WHITE
    },
    picker_wrapper: {
        backgroundColor: colors.LIGHT_BLUE,
        overflow: 'hidden',
        borderRadius: 15
    },
    inputCVC: {
        backgroundColor: colors.LIGHT_BLUE,
        paddingLeft: 10,
        color: colors.WHITE,
        height: 50,
        borderRadius: 15
    }
})