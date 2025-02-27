import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width, height}= useWindowDimensions();

    let imageSize= 300;

    if (width> 500){
        imageSize= 150;
    }

    if (height<400){
        imageSize: 80;

    }

    const imageStyle= {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    }

    return (
        <ScrollView style= {styles.screen}>
            <View style= {styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style= {[styles.imageContainer, imageStyle]}>
                    <Image style= {styles.image} source={require('../assets/Image/success.png')}/>
                </View>
                <Text style= {styles.summaryText}>Your phone needed <Text style= {styles.highLight}>{roundsNumber}</Text> rounds to guess the numbere <Text style= {styles.highLight}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>start a new game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen; 

// const dimensions= Dimensions.get('window').width;

const styles= StyleSheet.create({
    screen:{
        flex: 1,
    },
    imageContainer: {
        // width: dimensions < 380 ? 150: 300,
        // height: dimensions < 380 ? 150: 300,
        // borderRadius:dimensions < 380 ? 75: 150,
        borderWidth: 3,
        borderColor: Colors.primary500,
        overflow: 'hidden',
        margin: 36,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    rootContainer: {
        flex:1, 
        padding: 24, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryText: {
        fontFamily: 'outfit-Regular',
        fontSize: 20,
        textAlign: 'center'
    },
    highLight: {
        fontFamily: 'outfit-Bold',
        color: Colors.primary500
    }
});