import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../src/utils/responsive';

const COLORS = {
    background: '#141326',
    cardBg: '#433DA3',
    primary: '#E3823C',
    accent: '#E33C3C',
    text: '#FFFFFF',
    textSecondary: '#D7C7EC',
    yellow: '#FFC107',
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
        flexGrow: 1,
        padding: scale(20),
        paddingBottom: verticalScale(120),
    },
    header: {
        marginBottom: verticalScale(20),
    },
    title: {
        fontSize: moderateScale(28),
        fontFamily: 'Poppins-Bold',
        color: COLORS.yellow,
        marginBottom: verticalScale(4),
    },
    subtitle: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
    },
    categoriesContainer: {
        marginBottom: verticalScale(20),
        maxHeight: verticalScale(40),
    },
    categoriesContent: {
        paddingRight: scale(20),
    },
    categoryPill: {
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(8),
        borderRadius: moderateScale(20),
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.textSecondary,
        marginRight: scale(8),
        height: verticalScale(36),
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryPillActive: {
        backgroundColor: COLORS.yellow,
        borderColor: COLORS.yellow,
    },
    categoryText: {
        fontSize: moderateScale(13),
        color: COLORS.textSecondary,
        fontFamily: 'Poppins-Medium',
    },
    categoryTextActive: {
        color: COLORS.background,
        fontFamily: 'Poppins-SemiBold',
    },
    postsContainer: {
        gap: verticalScale(16),
    },
    postCard: {
        backgroundColor: COLORS.cardBg,
        borderRadius: moderateScale(16),
        padding: scale(16),
        marginBottom: verticalScale(16),
    },
    postHeader: {
        flexDirection: 'row',
        marginBottom: verticalScale(12),
    },
    avatar: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: COLORS.textSecondary,
        marginRight: scale(12),
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    postHeaderText: {
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(4),
        gap: scale(8),
    },
    postTitle: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        flex: 1,
    },
    categoryBadge: {
        paddingHorizontal: scale(8),
        paddingVertical: verticalScale(4),
        borderRadius: moderateScale(12),
    },
    categoryBadgeText: {
        fontSize: moderateScale(10),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.background,
    },
    postMeta: {
        fontSize: moderateScale(12),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
    },
    postContent: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.text,
        lineHeight: moderateScale(20),
        marginBottom: verticalScale(12),
    },
    postFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(16),
    },
    engagementItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    engagementText: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: verticalScale(60),
    },
    emptyStateText: {
        fontSize: moderateScale(18),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        marginBottom: verticalScale(8),
    },
    emptyStateSubtext: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
    },
    fab: {
        position: 'absolute',
        bottom: verticalScale(20),
        right: scale(20),
        width: moderateScale(56),
        height: moderateScale(56),
        borderRadius: moderateScale(28),
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});

export { COLORS };
