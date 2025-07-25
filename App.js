import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import FeedScreen from './src/features/feed/presentation/screens/FeedScreen';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <FeedScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
