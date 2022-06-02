import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    content_input: {
        flex: 1
    },
    input_wrapper: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.LIGHT_BLUE,
        borderRadius: 15,
        marginVertical: 5,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        color: colors.WHITE
    },
    progress_wraper: {
        alignItems: 'center',
        marginRight: 10
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: colors.LIGHT_BLUE
    },
    bar: {
        height: 40,
        width: 1,
        backgroundColor: colors.LIGHT_BLUE
    },
    selected: {
        backgroundColor: colors.WHITE
    }
})