import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Import Phase 1 components and utilities
import Button from '../src/components/common/Button';
import Input from '../src/components/common/Input';
import Card from '../src/components/common/Card';
import COLORS from '../src/constants/colors';
import { CATEGORIES } from '../src/constants/categories';
import { formatCurrency, formatDate, formatPercentage } from '../src/utils/formatting';
import { validateEmail, validateAmount } from '../src/utils/validation';

const TestPhase1 = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [emailError, setEmailError] = useState('');
    const [amountError, setAmountError] = useState('');

    const handleValidateEmail = () => {
        const result = validateEmail(email);
        setEmailError(result.isValid ? '' : result.message);
        alert(result.isValid ? 'Email is valid!' : result.message);
    };

    const handleValidateAmount = () => {
        const result = validateAmount(amount);
        setAmountError(result.isValid ? '' : result.message);
        alert(result.isValid ? 'Amount is valid!' : result.message);
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <StatusBar style="light" />

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <Text style={styles.title}>Phase 1 Component Test</Text>

                {/* Test Card Component */}
                <Card variant="elevated">
                    <Text style={styles.sectionTitle}>Card Component Test</Text>
                    <Text style={styles.text}>This is a card with elevated variant</Text>
                </Card>

                <Card variant="outlined" onPress={() => alert('Card pressed!')}>
                    <Text style={styles.sectionTitle}>Touchable Card</Text>
                    <Text style={styles.text}>Tap this card to test onPress</Text>
                </Card>

                {/* Test Input Component */}
                <Card>
                    <Text style={styles.sectionTitle}>Input Component Test</Text>

                    <Input
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        icon="email"
                        keyboardType="email-address"
                        error={emailError}
                    />

                    <Input
                        label="Amount"
                        value={amount}
                        onChangeText={setAmount}
                        placeholder="Enter amount"
                        icon="attach-money"
                        keyboardType="numeric"
                        error={amountError}
                    />

                    <Input
                        label="Password"
                        value=""
                        onChangeText={() => { }}
                        placeholder="Enter password"
                        icon="lock"
                        secureTextEntry
                    />
                </Card>

                {/* Test Button Component */}
                <Card>
                    <Text style={styles.sectionTitle}>Button Component Test</Text>

                    <Button
                        title="Primary Button"
                        onPress={() => alert('Primary button pressed!')}
                        variant="primary"
                    />

                    <Button
                        title="Secondary Button"
                        onPress={() => alert('Secondary button pressed!')}
                        variant="secondary"
                    />

                    <Button
                        title="Outline Button"
                        onPress={() => alert('Outline button pressed!')}
                        variant="outline"
                    />

                    <Button
                        title="Text Button"
                        onPress={() => alert('Text button pressed!')}
                        variant="text"
                    />

                    <Button
                        title="Validate Email"
                        onPress={handleValidateEmail}
                        variant="primary"
                    />

                    <Button
                        title="Validate Amount"
                        onPress={handleValidateAmount}
                        variant="primary"
                    />
                </Card>

                {/* Test Formatting Utils */}
                <Card>
                    <Text style={styles.sectionTitle}>Formatting Utils Test</Text>
                    <Text style={styles.text}>Currency: {formatCurrency(15000)}</Text>
                    <Text style={styles.text}>Date: {formatDate(new Date(), 'long')}</Text>
                    <Text style={styles.text}>Percentage: {formatPercentage(75.5)}</Text>
                </Card>

                {/* Test Constants */}
                <Card>
                    <Text style={styles.sectionTitle}>Constants Test</Text>
                    <Text style={styles.text}>Primary Color: {COLORS.primary}</Text>
                    <Text style={styles.text}>Categories: {CATEGORIES.length} items</Text>
                    <Text style={styles.text}>First Category: {CATEGORIES[0].name}</Text>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingBottom: 100,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: COLORS.text,
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.text,
        marginBottom: 12,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: COLORS.textSecondary,
        marginBottom: 8,
    },
});

export default TestPhase1;
