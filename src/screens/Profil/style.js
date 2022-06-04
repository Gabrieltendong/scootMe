import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    btn: {
        marginTop: 50
    },
    back_btn: {
        height: 40,
        width: 40,
        marginVertical: 20
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60
    },
    avatar_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },
    icon_editing: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        position: 'absolute',
        // top: 0,
        // bottom: 0
    }
})