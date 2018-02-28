import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Linking, Button, Alert } from 'react-native';
import Header from '../Components/Header.js';
import { StackNavigator } from 'react-navigation';
import SummaryContainer from '../Containers/SummaryContainer.js';

//TODO: Add pictures dynamically
//Might need to store the img src somewhere for dynamic display
const NewsBox = (props) => {
    return (
        <View style={styles.viewBackground}>    
            <Header text={props.data.tab}/>
            <ScrollView>
                {
                    props.data.apiData.map((newsBox, index) => {
                        return (
                            <ImageBackground source={require('../../Util/img/photo1.jpg')}
                                            style={styles.image}
                                            key={index}
                                            borderRadius={10}>
                
                                <View key={index}>
                                    <Text style={styles.headline}
                                        onPress={ () =>    
                                            Alert.alert(
                                            'Summary',
                                            newsBox.summary,
                                            [
                                                {text: 'Okay', onPress: () => console.log('Okay')}
                                            ]
                                        )}>

                                        {newsBox.title} {"\n\n"}                                      
                                        <Text style={styles.summary}>Read Time: {newsBox.readTimeMinutes} minutes</Text>
                                        {"\n"}
                                        <Text style={styles.links}>
                                            <Text style={styles.summary} onPress= {() => Linking.openURL(newsBox.url)}>Click Me</Text>
                                        </Text>
                                    </Text>
                                </View>

                            </ImageBackground>
                        );
                    })
                }
            </ScrollView>
        </View>
    )
    
}

const styles = StyleSheet.create({
    headline: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    viewBackground: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 5,
    },
    summary:{
        color: '#ffffff',
        fontSize: 12,
        alignItems: 'center'
    },
    links:{
        color: '#ffffff',
        fontSize: 12,
        alignItems: 'center',
        backgroundColor: '#435472',
        borderRadius: 10,
    },
    image:{
        width: '95%',
        margin: 5,
        padding: 15,
        borderRadius: 90,
    }

});

export default NewsBox;
