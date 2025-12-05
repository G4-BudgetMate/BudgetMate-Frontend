import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#141326' },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen
                name="Login"
                options={{
                    title: 'Login',
                }}
            />
            <Stack.Screen
                name="Signup"
                options={{
                    title: 'Sign Up',
                }}
            />
        </Stack>
    );
}
