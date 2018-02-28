import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headBar}>
            <Text style={styles.text}>
                {props.text}
            </Text>
            
            <Text style={styles.divider}>___________________________________________</Text>

        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headBar: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        alignItems: 'center'  
    },
    text: {
        fontSize: 15
    },
    divider: {
        color:'#d9d9d9'
    }
});