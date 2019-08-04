import React from 'react';
import PropTypes from 'prop-types';
import ViewPropTypes from 'react-native';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

const Thumbnail = ({ style, accentColor, url }) => {
  const imageStyle = {
    backgroundColor: `${accentColor}77` // adds some transparency to the color
  };

  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      {url.length > 0 ? (
        <Image
          style={[styles.image, imageStyle]}
          source={{
            uri: url
          }}
        >
        </Image>
      ) : (
        <View
          style={[styles.image, imageStyle]}
        >
        </View>
      )}
    </View>
  );
};

Thumbnail.propTypes = {
  style: ViewPropTypes.style,
  url: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  image: {
    height: 100,
    justifyContent: 'flex-end'
  }
});

export default Thumbnail;
