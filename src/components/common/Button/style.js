import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export const styles = StyleSheet.create({
    container: {
       height: 56,
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       backgroundColor: colors.LIGHT_BLUE,
       paddingHorizontal: 20,
       borderRadius: 20,
       marginVertical: 10
    },
    textBtn: {
        color: colors.WHITE,
        fontSize: 18
    }
})