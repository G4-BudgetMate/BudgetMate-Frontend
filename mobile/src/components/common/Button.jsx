import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import COLORS from '../../constants/colors';

/**
 * Reusable Button Component
 * @param {string} title - Button text
 * @param {function} onPress - Press handler
 * @param {string} variant - Button style variant ('primary', 'secondary', 'outline', 'text')
 * @param {boolean} disabled - Disabled state
 * @param {boolean} loading - Loading state
 * @param {object} style - Custom style
 * @param {object} textStyle - Custom text style
 */
const Button = ({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    loading = false,
    style,
    textStyle,
    ...props
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primaryButton;
            case 'secondary':
                return styles.secondaryButton;
            case 'outline':
                return styles.outlineButton;
            case 'text':
                return styles.textButton;
            default:
                return styles.primaryButton;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'primary':
                return styles.primaryText;
            case 'secondary':
                return styles.secondaryText;
            case 'outline':
                return styles.outlineText;
            case 'text':
                return styles.textText;
            default:
                return styles.primaryText;
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                getButtonStyle(),
                disabled && styles.disabled,
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? COLORS.text : COLORS.primary} />
            ) : (
                <Text style={[styles.text, getTextStyle(), textStyle]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: verticalScale(14),
        paddingHorizontal: scale(24),
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: verticalScale(50),
    },

    // Primary button
    primaryButton: {
        backgroundColor: COLORS.primary,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    primaryText: {
        color: COLORS.text,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
    },

    // Secondary button
    secondaryButton: {
        backgroundColor: COLORS.cardBg,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    secondaryText: {
        color: COLORS.text,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
    },

    // Outline button
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    outlineText: {
        color: COLORS.primary,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
    },

    // Text button
    textButton: {
        backgroundColor: 'transparent',
        paddingVertical: verticalScale(8),
    },
    textText: {
        color: COLORS.primary,
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Medium',
    },

    // Disabled state
    disabled: {
        opacity: 0.5,
    },

    text: {
        textAlign: 'center',
    },
});

export default Button;
