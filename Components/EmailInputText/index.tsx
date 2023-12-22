import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Platform } from 'react-native';
import AppColors from '../../Config/Colors';
import { isEmailValid } from '../../Validation';

interface EmailInputTextProps {
    title: string;
    placeholder: string;
    keyboardType?: string;
    secureTextEntry?: boolean;
    passwordShow?: boolean;
    onPressShowPassword?: () => void;
    placeholderTextColor?: string;
    style?: object;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    value?: string;
    onChangeText: (newVal: string) => void;
    maxLength?: number;
    pointerEvents?: 'auto' | 'none' | undefined;
    editable?: boolean;
    styleDisablecolor?: string;
}

const EmailInputText: React.FC<EmailInputTextProps> = ({
    title,
    placeholder,
    keyboardType,
    secureTextEntry,
    passwordShow,
    onPressShowPassword,
    placeholderTextColor,
    style,
    autoCapitalize,
    autoCorrect,
    value = '',
    onChangeText,
    maxLength,
    pointerEvents,
    editable = true,
    styleDisablecolor,
    ...props
}) => {
    const isEmailCheck = isEmailValid(value);

    const [val, setVal] = useState(value);

    useEffect(() => {
        setVal(value);
    }, [value]);

    const handleChangeText = (newVal: string) => {
        onChangeText(newVal);
    };

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View
                style={[
                    styles.container,
                    {
                        borderColor: isEmailCheck
                            ? 'rgba(0,0,0,0.8)'
                            : !editable
                                ? 'rgba(148, 163, 184, 0.5)'
                                : val !== '' && !editable
                                    ? 'red'
                                    : 'rgba(0,0,0,0.8)',

                        backgroundColor: editable ? '' : '#1D283A',
                    },
                ]}
            >
                <TextInput
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize || 'none'}
                    defaultValue={val}
                    pointerEvents={pointerEvents !== undefined ? 'none' : 'auto'}
                    editable={editable !== undefined ? editable : true}
                    onChangeText={handleChangeText}
                    style={[styles.input]}
                    autoCorrect={autoCorrect !== undefined ? autoCorrect : false}
                    autoFocus={false}
                    clearTextOnFocus={false}
                    maxLength={maxLength || 50}
                    {...props}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: AppColors.color.COLOR_WHITE,
        borderWidth: 1.5,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 0.5,
        elevation: Platform.OS == 'ios' ? 1 : 0,
        paddingLeft: 8,
    },
    title: {
        height: 20,
        lineHeight: 24,
        marginBottom: 10,
        fontWeight: '400',
        color: AppColors.color.COLOR_BLACK,
        fontSize: 15,
    },
    input: {
        paddingLeft: 15,
        paddingRight: 6,
        fontWeight: '400',
        color: AppColors.color.COLOR_BLACK,
        height: 50,
        width: '87%',
        flex: 1,
    },
    clearButton: {
        backgroundColor: '#e1e1e1',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        opacity: 0.7,
    },
    showPasswordButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
});

export default EmailInputText;
