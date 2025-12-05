import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../src/utils/responsive';

export const COLORS = {
    background: '#141326',
    text: '#FFFFFF',
    textSecondary: '#D7C7EC',
    primary: '#E3823C',
    blue: '#433DA3',
    green: '#4CAF50',
    red: '#E33C3C',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        paddingHorizontal: scale(20),
        paddingTop: verticalScale(20),
        paddingBottom: verticalScale(10),
    },
    title: {
        fontSize: moderateScale(28),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
    },
    subtitle: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
        marginTop: verticalScale(-4),
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: scale(20),
        paddingTop: verticalScale(10),
    },
});
