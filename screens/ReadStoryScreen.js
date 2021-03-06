import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
    state = {
        search: ''
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render(){
        const { search } = this.state;

        return(
            <SearchBar
              placeholder = "Type Here..."
              onChangeText = {this.updateSearch}
              value = {search}
            />
        
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center"}
})