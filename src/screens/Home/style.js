import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menu_btn: {
        height: 50,
        width: 50
    },
    header: {
        height: 250,
        backgroundColor: colors.PRIMARY,
        paddingTop: 40,
        paddingHorizontal: 10
    },
    body: {
        flex: 1
    },
    map: {
        flex: 1
    }
})