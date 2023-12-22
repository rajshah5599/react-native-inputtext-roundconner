import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import AssetsImages from '../../Config/Images';
import AppColors from '../../Config/Colors';

interface PasswordInputTextProps {
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
    valid?: boolean;
    styleDisablecolor?: string;
}

const PasswordInputText: React.FC<PasswordInputTextProps> = ({
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
    valid,
    styleDisablecolor,
    ...props
}) => {
    const [val, setVal] = useState(value);
    const [showPassword, setShowPassword] = useState(
        secureTextEntry ? !secureTextEntry : true
    );

    useEffect(() => {
        setVal(value);
    }, [value]);

    const handleChangeText = (newVal: string) => {
        onChangeText(newVal);
    };

    const handlePressShowPassword = () => {
        setShowPassword(!showPassword);
        if (onPressShowPassword) {
            onPressShowPassword();
        }
    };

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View
                style={[
                    styles.container,
                    {
                        borderColor: valid
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
                    secureTextEntry={secureTextEntry && !showPassword}
                    maxLength={maxLength || 50}
                    {...props}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        style={[styles.showPasswordButton]}
                        onPress={handlePressShowPassword}
                    >
                        {passwordShow ? (
                            <Image source={AssetsImages.IconEyeShow} style={styles.icon} />
                        ) : (
                            <Image source={AssetsImages.IconEye} style={styles.icon} />
                        )}
                    </TouchableOpacity>
                )}
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
    icon: {
        width: 20, height: 20
    }
});

export default PasswordInputText;
