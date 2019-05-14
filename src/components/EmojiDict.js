import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

class EmojiDict extends Component {
  state = {
    'hello': 'hello'
  }

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
            <Text>{this.state['hello']} </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default EmojiDict
