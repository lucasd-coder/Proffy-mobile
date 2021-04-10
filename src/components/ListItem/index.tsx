import React, {useRef} from 'react';
import { Text, View, TextInput} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { RectButton } from 'react-native-gesture-handler';

import InputMaskHour from '../InputMaskHours/Index';

import styles from './styles';

interface ListItemProps {
    selectedValue: string | number | undefined;
    onValueChange?: ((itemValue: string | number, itemIndex: number) => void) | undefined;
    isDas: string;
    isAte: string;
    inputMaskChangeIsDas: ((state: string)=> void) | undefined;
    inputMaskChangeIsAte: ((state: string)=> void) | undefined;
    onDelete?: ((pointerInside: boolean) => void) | undefined,
}

// onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue as string)}
// inputMaskChange={((state: string) => setIsDas(state))}

const ListItem: React.FC<ListItemProps> = ({ 
        selectedValue, 
        onValueChange, 
        isDas, 
        isAte, 
        inputMaskChangeIsDas,
        inputMaskChangeIsAte,
        onDelete,        
    }) => {

    const isDasRef = useRef<TextInput>(null);
    const isAteRef = useRef<TextInput>(null);


    return (
        <>
            <Text style={styles.label}>Dia da semana</Text>
            <View style={styles.containerSelected}>
                <Picker
                    style={styles.selectedPicker}
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    dropdownIconColor="#9C98A6"
                >
                <Picker.Item label="" value="" />
                <Picker.Item label="Segunda-feira" value="1"/>
                <Picker.Item label="Terça-feira" value="2" />
                <Picker.Item label="Quarta-feira" value="3" />
                <Picker.Item label="Quinta-feira" value="4" />
                <Picker.Item label="Sexta-feira" value="5" />
            </Picker>
            </View>
            <View style={styles.containerAvailableTime}>
                <View style={{marginLeft: 6, marginRight: 17}} >                                
                    <Text style={styles.labelAvailableTime}>Das</Text> 
                    <View style={styles.inputContainerAvailableTime}>
                        <InputMaskHour 
                            style={styles.inputAvailableTime}
                            value={isDas}
                            mask="hours"
                            keyboardType="numeric"
                            inputMaskChange={inputMaskChangeIsDas}
                            inputRef={isDasRef}
                            onSubmitEditing={() => {
                                isAteRef.current?.focus()
                            }}
                        />                    
                    </View>
                </View>
                
                <View >                                
                    <Text style={[styles.labelAvailableTime]}>Até</Text> 
                    <View style={[styles.inputContainerAvailableTime]}>
                        <InputMaskHour
                            style={styles.inputAvailableTime}
                            value={isAte}
                            mask="hours"
                            keyboardType="numeric"
                            inputMaskChange={inputMaskChangeIsAte}
                            inputRef={isAteRef}
                        />                            
                    </View>
                </View>
            </View>
            <View style={styles.sectionDelete}>
                <View style={styles.sectionDeleteLine} />
                <RectButton onPress={onDelete}>
                    <Text style={styles.titleDelete}> Excluir horário </Text>
                </RectButton>
                <View style={styles.sectionDeleteLine} />
            </View>        
        </>
    )
}

export default ListItem;