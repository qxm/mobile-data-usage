import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Image,
  Slider,
  SafeAreaView,
  Linking
} from 'react-native';

export default class DataUsageItem extends Component {
  constructor(props) {
    super(props);
  }


  renderData(data) {
    if (data.length === 0) {
      return (
        <Text style={{ textAlign: 'center', padding: 10 }}>Data Empty</Text>
      );
    }
    return data.map(item => {
      const accentColor = globalStyles.ACCENT_COLORS[
      this.props.index % globalStyles.ACCENT_COLORS.length
    ];
      if (item.decline) {
      return (
        <View
          key={item._id}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between'
          }}
        >
          <Text>{item.volume_of_mobile_data}</Text>
	  <TouchableOpacity
              onPress={() => Linking.openURL(item.url)}
            >
	  <Image source={require('../assets/decline.png')}
               style={{width: 30, height: 30}} />
	   </TouchableOpacity>
          <Text>{item.quarter}</Text>
        </View>
      );
    } 
    
      return (
        <View
          key={item._id}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between'
          }}
        >
          <Text>{item.volume_of_mobile_data}</Text>
          <Text>{item.quarter}</Text>
        </View>
      );
    });

  }

  render() {
    const { dataUsage } = this.props;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <CardView
            style={{
              backgroundColor: 'white'
            }}
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}
            cornerOverlap={false}
          >
            <View style={styles.child}>
              <View style={styles.titleView}>
                <Text style={styles.title}>{dataUsage[0].quarter.substring(0,4)}</Text>
              </View>
              <View>{this.renderData(dataUsage)}</View>
            </View>
          </CardView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  child: {
    width: 300
  },
  titleView: {
    padding: 10,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  sliderStyle: {
    width: 300,
    marginTop: 40
  },
  thumbnail: {
    marginBottom: 5
  }
});
