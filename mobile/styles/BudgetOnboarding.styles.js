import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../src/utils/responsive';

const COLORS = {
    background: '#141326',
    cardBg: '#433DA3',
    primary: '#5C52C5',
    secondary: '#8B7FD9',
    accentGold: '#E3B53C',
    accentBlue: '#3336EB',
    text: '#FFFFFF',
    textSecondary: '#D7C7EC',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    stepContainer: { // Container for each step (1, 2, 3, 4)
        flex: 1,
        padding: scale(20),
        justifyContent: 'space-between',
    },
    welcomeContent: { // WELCOME SCREEN (Step 1)
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: scale(300),
        height: scale(300),
        marginBottom: verticalScale(20),
    },
    welcomeText: {
        fontSize: moderateScale(32),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
        marginBottom: verticalScale(8),
    },
    getStartedButton: {
        backgroundColor: COLORS.primary,
        borderRadius: moderateScale(12),
        paddingVertical: verticalScale(16),
        paddingHorizontal: scale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: scale(8),
    },
    getStartedButtonText: {
        fontSize: moderateScale(18),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
    },

    heading: { // TEXT STYLES
        fontSize: moderateScale(24),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
        marginTop: verticalScale(20),
        marginBottom: verticalScale(8),
    },
    subtitle: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
        marginBottom: verticalScale(32),
    },
    subheading: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        marginTop: verticalScale(24),
        marginBottom: verticalScale(16),
    },
    label: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.accentGold,
        marginBottom: verticalScale(12),
        marginTop: verticalScale(16),
    },
    helperText: {
        fontSize: moderateScale(13),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
        marginTop: verticalScale(8),
        marginBottom: verticalScale(16),
    },

    inputContainer: { // INPUT BOXES
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.cardBg,
        borderRadius: moderateScale(12),
        paddingHorizontal: scale(16),
        height: verticalScale(56),
    },
    currencyPrefix: {
        fontSize: moderateScale(18),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        marginRight: scale(8),
    },
    percentSign: {
        fontSize: moderateScale(18),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        marginLeft: scale(8),
    },
    input: {
        flex: 1,
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Regular',
        color: COLORS.text,
    },

    radioButton: { // RADIO BUTTONS (Payment Frequency)
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(16),
        paddingHorizontal: scale(16),
        borderRadius: moderateScale(12),
        marginBottom: verticalScale(12),
        backgroundColor: 'transparent',
    },
    radioButtonSelected: {
        backgroundColor: 'rgba(227, 181, 60, 0.1)',
    },
    radioCircle: {
        width: moderateScale(24),
        height: moderateScale(24),
        borderRadius: moderateScale(12),
        borderWidth: 2,
        borderColor: COLORS.text,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scale(12),
    },
    radioCircleInner: {
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(6),
        backgroundColor: COLORS.accentGold,
    },
    radioText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Regular',
        color: COLORS.text,
    },
    radioTextSelected: {
        color: COLORS.accentGold,
        fontFamily: 'Poppins-SemiBold',
    },
    categoriesGrid: { // CATEGORY GRID (Spending Categories)
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: verticalScale(16),
    },
    categoryButton: {
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(12),
        borderRadius: moderateScale(8),
        borderWidth: 1,
        borderColor: '#000000',
        marginBottom: verticalScale(12),
        backgroundColor: 'transparent',
    },
    categoryButtonSelected: {
        borderColor: '#000000',
    },
    checkbox: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: moderateScale(4),
        borderWidth: 2,
        borderColor: COLORS.text,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scale(8),
    },
    checkboxSelected: {
        backgroundColor: COLORS.accentBlue,
        borderColor: COLORS.accentBlue,
    },
    categoryText: {
        fontSize: moderateScale(13),
        fontFamily: 'Poppins-Regular',
        color: COLORS.text,
        flex: 1,
    },
    categoryTextSelected: {
        color: COLORS.accentGold,
        fontFamily: 'Poppins-Medium',
    },

    navigationButtons: { //NAVIGATION BUTTONS (Back, Next, Done) 
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: scale(12),
        marginTop: verticalScale(20),
    },
    backButton: {
        flex: 1,
        backgroundColor: COLORS.text,
        borderRadius: moderateScale(12),
        paddingVertical: verticalScale(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.background,
    },
    nextButton: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderRadius: moderateScale(12),
        paddingVertical: verticalScale(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneButton: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderRadius: moderateScale(12),
        paddingVertical: verticalScale(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
    },
});

export { styles, COLORS };