'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;

var AndroidApple = React.createClass ({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    )
  }
});

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

React.AppRegistry.registerComponent('AndroidApple', () => AndroidApple);
