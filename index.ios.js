'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;

var AndroidApple = React.createClass ({
  getInitialState: function() {
    return {
      isAndroid: this.props.isAndroid
    }
  },

  render: function() {
    var androidAppleView;
    if (this.state.isAndroid) {
      androidAppleView = <Text>Android!</Text>
    } else {
      androidAppleView = <Text>Apple!</Text>
    }

    return (
      <View style={styles.container}>
        {androidAppleView}
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
