import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.PRIMARY,
        alignItems: 'center'
    },
    body: {
        marginTop: 50
    },
    header: {
        alignItems: 'center',
        marginTop: 150
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 45
    },
    btn_menu: {
        marginVertical: 20
    },
    text_btn: {
        color: colors.WHITE,
        fontSize: 22,
        textAlign: 'center'
    }
})