import React from 'react';
import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {maskPhone} from '../utils/resources';

interface Properties extends TextInputProps {
    mask: 'phone';
    inputMaskChange: any,
}

const InputMask: React.FC<Properties> = ({ mask, inputMaskChange, ...rest }) => {
    function formatText(value: string) {
        inputMaskChange(maskPhone(value));
    }

    return (
        <TextInput onChangeText={(text) => formatText(text)}  {...rest} />
    );
}

export default InputMask;