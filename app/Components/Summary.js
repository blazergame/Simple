import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Summary = (props) => {
    return (
        <View style={styles.headBar}>
            <Text style={styles.text}>
                This is the summary of stuff
            </Text>            
        </View>
    );
}

const styles = StyleSheet.create({
    headBar: {
        backgroundColor: '#f2f2f2',
        alignItems: 'center'  
    },
});

export default Header;
