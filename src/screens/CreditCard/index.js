//import liraries
import React, { useState, Fragment } from 'react';
import { 
    View,
    Text,
    TextInput
} from 'react-native';
import { Button, Input } from '../../components/common';
import { Container } from '../../components/layout';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import {Picker} from '@react-native-picker/picker';

import { styles } from './style';
import { colors } from '../../styles';

// create a component
const CreditCardScreen = ({navigation}) => {

    const [value, setValue] = useState('');
    const [month, setMonth] = useState('01')
    const [year, setYear] = useState('2021')
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const CELL_COUNT = 16;

    return (
        <Container 
            showBackButton={true}
            navigation={navigation}
        >
            <View style={styles.container}>
                <Input
                    label="Nom titulaire"
                    placeholder="test_Scootme@compte.fr"
                />
                <View>
                    <Text style={styles.label}>Numero de carte</Text>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <Fragment key={index}>
                                <Text
                                    key={`value-${index}`}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                                {index === 3 || index === 7 || index === 11 ? (
                                    <View key={`separator-${index}`} style={styles.separator} />
                                ) : null}
                            </Fragment>
                        )}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.label}>Mois</Text>
                        <View style={styles.picker_wrapper}>
                            <Picker
                                style={styles.picker}
                                itemStyle={styles.itemPicker}
                                selectedValue={month}
                                dropdownIconColor={colors.WHITE}
                                onValueChange={(itemValue, itemIndex) =>
                                    setMonth(itemValue)
                                }
                            >
                                <Picker.Item label="01" value="01" />
                                <Picker.Item label="02" value="02" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>Annee</Text>
                        <View style={styles.picker_wrapper}>
                            <Picker
                                style={styles.picker}
                                itemStyle={styles.itemPicker}
                                selectedValue={year}
                                dropdownIconColor={colors.WHITE}
                                onValueChange={(itemValue, itemIndex) =>
                                    setYear(itemValue)
                                }
                            >
                                <Picker.Item label="2021" value="2021" />
                                <Picker.Item label="2022" value="2022" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.label}>CCV</Text>
                        <TextInput
                            style={styles.inputCVC}
                            placeholder='123'
                            placeholderTextColor={colors.WHITE}
                        />
                    </View>
                </View>
                <Button
                    text="Terminer"
                    style = {styles.btn}
                    onPress= {() => navigation.navigate('Drawer')}
                />
            </View>
        </Container>
    );
};

//make this component available to the app
export default CreditCardScreen;
