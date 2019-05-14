import React, { Component } from 'react'
import { TouchableOpacity, FlatList, View, Text, StyleSheet } from 'react-native'

class EmojiDict extends Component {
	state = {
	  '😃': '😃 Smiley',
	  '🚀': '🚀 Rocket',
	  '⚛️': '⚛️ Atom Symbol'
	};

  openPopup() {
    console.log('hello')
  }

	render() {
  		return (

        <View style={styles.container}>
          <Text>
              Hello World
          </Text>
          <TouchableOpacity onPress={this.openPopup}>
          <View>
            <Text>{this.state['😃']} </Text>
          </View>
          </TouchableOpacity>
        </View>
  		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default EmojiDict;
