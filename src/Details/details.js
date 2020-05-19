import React from 'react';
import {Image, View, StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: win.height,
    }
});

export class Details extends React.Component{
    render() {
        return (
            <View>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                        source={{
                            uri: this.props.route.params.image,
                        }}
                    />
            </View>
        )
    }
}
