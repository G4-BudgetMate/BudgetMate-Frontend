import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale } from '../../src/utils/responsive';

const COLORS = {
    background: '#141326',
    cardBg: '#2A265C',
    primary: '#E3823C',
    text: '#FFFFFF',
    textSecondary: '#D7C7EC',
};

const ArticleDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    // Parse the article data passed from the previous screen
    const article = params.article ? JSON.parse(params.article) : null;

    if (!article) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={24} color={COLORS.text} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Article Not Found</Text>
                </View>
            </SafeAreaView>
        );
    }

    const { title, description, content, url, iconName = 'article', color = '#6C63FF' } = article;

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <StatusBar style="light" backgroundColor={COLORS.background} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color={COLORS.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>Article</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: verticalScale(40) }}
            >
                {/* Hero Section */}
                <View style={styles.heroContainer}>
                    <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
                        <MaterialIcons name={iconName} size={64} color={color} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

                {/* Content Body */}
                <View style={styles.bodyContainer}>
                    {content ? (
                        <Text style={styles.bodyText}>{content}</Text>
                    ) : (
                        <View>
                            <Text style={styles.bodyText}>
                                Full content not available directly. Read the original article at:
                            </Text>
                            <TouchableOpacity onPress={() => Linking.openURL(url)}>
                                <Text style={[styles.bodyText, { color: COLORS.primary, textDecorationLine: 'underline' }]}>
                                    {url}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                {/* External Link Button */}
                {url && (
                    <TouchableOpacity
                        style={styles.linkButton}
                        onPress={() => Linking.openURL(url)}
                    >
                        <Text style={styles.linkButtonText}>View Original Source</Text>
                        <MaterialIcons name="open-in-new" size={20} color={COLORS.text} />
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(12),
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    backButton: {
        padding: scale(4),
    },
    headerTitle: {
        fontSize: moderateScale(18),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
    },
    content: {
        flex: 1,
    },
    heroContainer: {
        padding: scale(20),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    iconContainer: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(16),
    },
    title: {
        fontSize: moderateScale(24),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: verticalScale(8),
    },
    description: {
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: moderateScale(20),
    },
    bodyContainer: {
        padding: scale(20),
    },
    bodyText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Regular',
        color: COLORS.text,
        lineHeight: moderateScale(26),
        marginBottom: verticalScale(16),
    },
    linkButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.cardBg,
        marginHorizontal: scale(20),
        padding: scale(16),
        borderRadius: moderateScale(12),
        marginTop: verticalScale(10),
    },
    linkButtonText: {
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        marginRight: scale(8),
    },
});

export default ArticleDetails;
