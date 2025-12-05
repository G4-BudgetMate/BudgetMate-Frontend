import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import COLORS from '../../constants/colors';

/**
 * Reusable Input Component
 * @param {string} label - Input label
 * @param {string} value - Input value
 * @param {function} onChangeText - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {boolean} secureTextEntry - Password input
 * @param {string} error - Error message
 * @param {string} keyboardType - Keyboard type
 * @param {boolean} multiline - Multiline input
 * @param {string} icon - Icon name (MaterialIcons)
 * @param {object} style - Custom style
 */
const Input = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    error,
    keyboardType = 'default',
    multiline = false,
    icon,
    style,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={[
                styles.inputContainer,
                isFocused && styles.inputFocused,
                error && styles.inputError,
            ]}>
                {icon && (
                    <MaterialIcons
                        name={icon}
                        size={20}
                        color={COLORS.textSecondary}
                        style={styles.icon}
                    />
                )}

                <TextInput
                    style={[
                        styles.input,
                        multiline && styles.multilineInput,
                        icon && styles.inputWithIcon,
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.textSecondary}
                    secureTextEntry={secureTextEntry && !showPassword}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />

                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.eyeIcon}
                    >
                        <MaterialIcons
                            name={showPassword ? 'visibility' : 'visibility-off'}
                            size={20}
                            color={COLORS.textSecondary}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: verticalScale(16),
    },

    label: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Medium',
        color: COLORS.text,
        marginBottom: verticalScale(8),
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.cardBg,
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: scale(16),
        minHeight: verticalScale(50),
    },

    inputFocused: {
        borderColor: COLORS.primary,
        borderWidth: 2,
    },

    inputError: {
        borderColor: COLORS.error,
    },

    icon: {
        marginRight: scale(8),
    },

    input: {
        flex: 1,
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.text,
        paddingVertical: verticalScale(12),
    },

    inputWithIcon: {
        paddingLeft: 0,
    },

    multilineInput: {
        minHeight: verticalScale(100),
        textAlignVertical: 'top',
    },

    eyeIcon: {
        padding: scale(4),
    },

    errorText: {
        fontSize: moderateScale(12),
        fontFamily: 'Poppins-Regular',
        color: COLORS.error,
        marginTop: verticalScale(4),
    },
});

export default Input;
