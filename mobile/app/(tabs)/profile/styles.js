import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../src/utils/responsive';

const COLORS = {
    background: '#141326',
    cardBg: '#433DA3',
    primary: '#E3823C',
    accent: '#E33C3C',
    text: '#FFFFFF',
    textSecondary: '#D7C7EC',
    yellow: '#FFC107',
    inputBg: '#2B2769',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingBottom: verticalScale(40),
    },

    // Header
    headerCard: {
        alignItems: 'center',
        paddingVertical: verticalScale(30),
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30),
        overflow: 'hidden',
        marginBottom: verticalScale(20),
    },
    headerGradient: {
        ...StyleSheet.absoluteFillObject,
    },
    avatarContainer: {
        width: moderateScale(90),
        height: moderateScale(90),
        borderRadius: moderateScale(45),
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(12),
        borderWidth: 2,
        borderColor: COLORS.yellow,
    },
    avatarImage: {
        width: '70%',
        height: '70%',
        tintColor: COLORS.yellow,
    },
    name: {
        fontSize: moderateScale(22),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
        marginBottom: verticalScale(4),
    },
    email: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
    },

    // Menu
    menuContainer: {
        paddingHorizontal: scale(20),
    },
    sectionTitle: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.textSecondary,
        marginBottom: verticalScale(10),
        marginTop: verticalScale(10),
        marginLeft: scale(4),
    },
    menuGroup: {
        backgroundColor: '#1F1C3E',
        borderRadius: moderateScale(16),
        overflow: 'hidden',
        marginBottom: verticalScale(10),
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(16),
        paddingHorizontal: scale(16),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    menuIconWrapper: {
        width: moderateScale(36),
        height: moderateScale(36),
        borderRadius: moderateScale(10),
        backgroundColor: 'rgba(255,255,255,0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(12),
    },
    menuContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: scale(8),
    },
    menuLabel: {
        fontSize: moderateScale(15),
        fontFamily: 'Poppins-Medium',
        color: COLORS.text,
    },
    destructiveLabel: {
        color: COLORS.accent,
    },
    menuValue: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.yellow,
    },

    versionText: {
        textAlign: 'center',
        color: 'rgba(255,255,255,0.2)',
        fontSize: moderateScale(12),
        fontFamily: 'Poppins-Regular',
        marginTop: verticalScale(20),
    },

    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '85%',
        borderRadius: moderateScale(24),
        overflow: 'hidden',
        padding: scale(24),
        alignItems: 'center',
    },
    gradientFill: {
        ...StyleSheet.absoluteFillObject,
    },
    modalTitle: {
        fontSize: moderateScale(20),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
        marginBottom: verticalScale(12),
    },
    modalText: {
        fontSize: moderateScale(15),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
        marginBottom: verticalScale(24),
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        width: '100%',
        gap: scale(12),
    },
    cancelButtonWrapper: {
        flex: 1,
        paddingVertical: verticalScale(12),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
    },
    cancelButtonText: {
        color: COLORS.textSecondary,
        fontFamily: 'Poppins-Medium',
    },
    logoutConfirmWrapper: {
        flex: 1,
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientBtn: {
        ...StyleSheet.absoluteFillObject,
    },
    logoutConfirmText: {
        fontSize: moderateScale(16),
        color: COLORS.text,
        fontFamily: 'Poppins-Bold',
    },
    logoutButtonWrapper: {
        marginTop: verticalScale(20),
        borderRadius: moderateScale(12),
        overflow: 'hidden',
        marginHorizontal: scale(20),
    },
    logoutButton: {
        paddingVertical: verticalScale(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
    },
});

export { COLORS };
