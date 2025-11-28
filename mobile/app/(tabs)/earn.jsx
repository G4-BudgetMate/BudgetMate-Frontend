import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { scale, verticalScale, moderateScale } from '../../src/responsive';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

const COLORS = {
    background: '#141326',
    cardBg: '#433DA3',
    primary: '#E3823C',
    accent: '#E33C3C',
    text: '#FFFFFF',
    textSecondary: '#D7C7EC',
    yellow: '#FFC107',
};

const Earn = () => {
    const [monthlyTotal, setMonthlyTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    // Load earnings from AsyncStorage and compute current month total
    const loadEarnings = async () => {
        setLoading(true);
        try {
            const raw = await AsyncStorage.getItem('earnings');
            let entries = [];
            if (raw) {
                entries = JSON.parse(raw);
            }

            // entries expected: [{ amount: number, date: ISOString }, ...]
            const now = new Date();
            const total = entries.reduce((sum, e) => {
                try {
                    const d = new Date(e.date);
                    if (d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()) {
                        return sum + (Number(e.amount) || 0);
                    }
                } catch (err) {
                    return sum;
                }
                return sum;
            }, 0);

            setMonthlyTotal(total);
        } catch (err) {
            console.error('Failed to load earnings', err);
            setMonthlyTotal(0);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadEarnings();
        }, [])
    );

    const formatCurrency = (n) => {
        return `₱ ${Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Add a sample earning entry (for demo/testing)
    const addSampleEarning = async () => {
        try {
            const raw = await AsyncStorage.getItem('earnings');
            const entries = raw ? JSON.parse(raw) : [];
            const sampleAmount = Math.floor(Math.random() * 5000) + 200; // random between 200-5200
            const entry = { amount: sampleAmount, date: new Date().toISOString() };
            entries.push(entry);
            await AsyncStorage.setItem('earnings', JSON.stringify(entries));
            Alert.alert('Added', `Sample earning ${formatCurrency(sampleAmount)} added`);
            loadEarnings();
        } catch (err) {
            console.error('Failed to add sample earning', err);
            Alert.alert('Error', 'Could not add sample earning');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor={COLORS.background} />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Search bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={moderateScale(18)} color="#A0A0A0" />
                    <TextInput
                        placeholder="Find Job"
                        placeholderTextColor="#A0A0A0"
                        style={styles.searchInput}
                    />
                </View>

                {/* Job Cards */}
                <View style={styles.cardsRow}>

                    {/* Freelance Writing */}
                    <View style={styles.card}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>Easy</Text>
                        </View>

                        <Text style={styles.cardTitle}>Freelance Writing</Text>
                        <Text style={styles.cardDesc}>Write articles for blogs and publications</Text>

                        <View style={styles.cardDetails}>
                            <Text style={styles.detailText}>₱ 50–200 per article</Text>
                            <Text style={styles.detailText}>5–10 hrs/week</Text>
                        </View>

                        <View style={styles.tagRow}>
                            <Text style={styles.tag}>Writing</Text>
                            <Text style={styles.tag}>Remote</Text>
                            <Text style={styles.tag}>Flexible</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.learnMoreBtn}
                            activeOpacity={0.7}
                            onPress={() => console.log("Learn More clicked")}
                        >
                            <Text style={styles.learnMoreText}>Learn More</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Virtual Assistant */}
                    <View style={styles.card}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>Easy</Text>
                        </View>

                        <Text style={styles.cardTitle}>Virtual Assistant</Text>
                        <Text style={styles.cardDesc}>
                            Help businesses with administrative tasks
                        </Text>

                        <View style={styles.cardDetails}>
                            <Text style={styles.detailText}>₱ 15–25/hour</Text>
                            <Text style={styles.detailText}>10–20 hrs/week</Text>
                        </View>

                        <View style={styles.tagRow}>
                            <Text style={styles.tag}>Admin</Text>
                            <Text style={styles.tag}>Remote</Text>
                            <Text style={styles.tag}>Flexible</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.learnMoreBtn}
                            activeOpacity={0.7}
                            onPress={() => console.log("Learn More clicked")}
                        >
                            <Text style={styles.learnMoreText}>Learn More</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Earnings Section */}
                <View style={styles.earningsContainer}>
                    <Text style={styles.earningsAmount}>{loading ? 'Loading...' : formatCurrency(monthlyTotal)}</Text>
                    <Text style={styles.earningsText}>
                        Total earned this month. <Text style={styles.detailsLink}>See details</Text>
                    </Text>

                    <TouchableOpacity style={[styles.learnMoreBtn, { marginTop: verticalScale(12) }]} onPress={addSampleEarning}>
                        <Text style={styles.learnMoreText}>Add sample earning</Text>
                    </TouchableOpacity>
                </View>

                {/* Bar Chart Placeholder */}
                <View style={styles.chartContainer}>
                    <View style={styles.chartRow}>
                        {[40, 10, 50, 70, 20, 10, 5, 90, 80, 50, 30, 20].map((h, index) => (
                            <View
                                key={index}
                                style={[styles.chartBar, { height: verticalScale(h) }]}
                            />
                        ))}
                    </View>

                    <View style={styles.monthRow}>
                        {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map(
                            (m, i) => (
                                <Text key={i} style={styles.monthText}>{m}</Text>
                            )
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        padding: scale(15),
        paddingBottom: verticalScale(20),
    },

    /** SEARCH BAR */
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F1C3E',
        paddingHorizontal: scale(12),
        paddingVertical: verticalScale(10),
        borderRadius: moderateScale(12),
        marginTop: verticalScale(10),
        borderWidth: 1,
        borderColor: COLORS.cardBg,
    },
    searchInput: {
        marginLeft: scale(10),
        color: COLORS.text,
        flex: 1,
        fontFamily: 'Poppins-Regular',
    },

    /** CARDS */
    cardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
    },
    card: {
        backgroundColor: COLORS.cardBg,
        width: '48%',
        padding: scale(15),
        borderRadius: moderateScale(18),
    },
    badge: {
        backgroundColor: COLORS.yellow,
        alignSelf: 'flex-start',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(4),
        borderRadius: moderateScale(10),
    },
    badgeText: {
        fontFamily: 'Poppins-Bold',
        fontSize: moderateScale(10),
        color: '#000',
    },
    cardTitle: {
        marginTop: verticalScale(10),
        fontSize: moderateScale(16),
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
    },
    cardDesc: {
        marginTop: verticalScale(5),
        fontSize: moderateScale(12),
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
    },
    cardDetails: {
        marginTop: verticalScale(10),
    },
    detailText: {
        color: COLORS.textSecondary,
        fontFamily: 'Poppins-Regular',
        fontSize: moderateScale(11),
        marginBottom: verticalScale(3),
    },

    tagRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: scale(6),
        marginTop: verticalScale(8),
    },
    tag: {
        backgroundColor: COLORS.yellow,
        color: '#000',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(4),
        fontSize: moderateScale(10),
        borderRadius: moderateScale(10),
        fontFamily: 'Poppins-Bold',
    },

    learnMoreBtn: {
        marginTop: verticalScale(12),
        backgroundColor: COLORS.primary,
        paddingVertical: verticalScale(6),
        borderRadius: moderateScale(12),
        alignItems: 'center',
    },
    learnMoreText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
        fontSize: moderateScale(12),
    },

    /** EARNINGS */
    earningsContainer: {
        marginTop: verticalScale(25),
        alignItems: 'center',
    },
    earningsAmount: {
        fontSize: moderateScale(30),
        fontFamily: 'Poppins-Bold',
        color: COLORS.yellow,
    },
    earningsText: {
        fontSize: moderateScale(13),
        color: COLORS.textSecondary,
        marginTop: verticalScale(5),
        fontFamily: 'Poppins-Regular',
    },
    detailsLink: {
        color: COLORS.text,
        fontFamily: 'Poppins-Bold',
    },

    /** CHART */
    chartContainer: {
        backgroundColor: COLORS.cardBg,
        borderRadius: moderateScale(18),
        padding: scale(15),
        marginTop: verticalScale(20),
    },
    chartRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: verticalScale(120),
    },
    chartBar: {
        width: scale(10),
        backgroundColor: COLORS.textSecondary,
        borderRadius: moderateScale(6),
    },
    monthRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(10),
    },
    monthText: {
        color: COLORS.textSecondary,
        fontSize: moderateScale(9),
        fontFamily: 'Poppins-Regular',
    },
});

export default Earn;
