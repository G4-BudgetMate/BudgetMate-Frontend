import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/responsive';
import COLORS from '../../constants/colors';

/**
 * Reusable Card Component
 * @param {React.ReactNode} children - Card content
 * @param {function} onPress - Press handler (makes card touchable)
 * @param {string} variant - Card style variant ('default', 'elevated', 'outlined')
 * @param {object} style - Custom style
 */
const Card = ({
    children,
    onPress,
    variant = 'default',
    style,
    ...props
}) => {
    const getCardStyle = () => {
        switch (variant) {
            case 'elevated':
                return styles.elevatedCard;
            case 'outlined':
                return styles.outlinedCard;
            default:
                return styles.defaultCard;
        }
    };

    const cardContent = (
        <View style={[styles.card, getCardStyle(), style]} {...props}>
            {children}
        </View>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {cardContent}
            </TouchableOpacity>
        );
    }

    return cardContent;
};

const styles = StyleSheet.create({
    card: {
        borderRadius: moderateScale(16),
        padding: scale(16),
        marginBottom: verticalScale(16),
    },

    // Default card
    defaultCard: {
        backgroundColor: COLORS.cardBg,
    },

    // Elevated card with shadow
    elevatedCard: {
        backgroundColor: COLORS.cardBg,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },

    // Outlined card
    outlinedCard: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
});

export default Card;
