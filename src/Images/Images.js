import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../redux/rootReducer';
import {Text, View ,Image, StyleSheet} from "react-native";
import {fetchImages} from "./actions";
import {TouchableHighlight} from "react-native-web";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchImages());

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        width: 200,
        height: 200
    }
});
export class Images extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        store.subscribe( () => {
            this.setState({
                items: store.getState().items
            });
        });
    }

    render() {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    margin: 30
                }}>
                    {this.state.items.map((prop) => {
                        return (
                            <View style={styles.container}>
                                <TouchableHighlight onPress={() =>
                                    this.props.navigation.navigate('Details', {
                                            image: prop['full']})}>
                                <Image
                                    style={{ width: 150, height: 150  }}
                                    source={{
                                        uri: prop['small'],
                                    }}
                                />
                                </TouchableHighlight>
                                <Text style={{margin:10}}><b>Name:</b>{prop['description']}</Text>
                                <Text style={{margin:10}}><b>Author:</b>{prop['username']}</Text>
                            </View>
                        );
                    })}
                </View>
            )}

}


