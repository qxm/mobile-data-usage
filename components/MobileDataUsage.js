import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Spacing,
  FlatList,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  WebView,
  RefreshControl,
  ActivityIndicator,
  ViewPropTypes
} from 'react-native';
import DataUsageItem from './DataUsageItem';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

export default class MobileDataUsage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
      modalVisible: false,
      refreshing: false
    };

    this.renderItem = this.renderItem.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
   if (this.props.dataUsage !== prevProps.dataUsage) {
    this.setState({
      initialLoading: false
    });
   }
 }

  onModalClose() {
    this.setState({
      modalVisible: false,
      modalUrl: undefined
    });
  }

  onModalOpen(url) {
    this.setState({
      modalVisible: true,
      modalUrl: url
    });
  }

 renderSeparator = () => {
    return (
      <View
        style={{
		height: 20,
		 backgroundColor: '#F5FCFF'
        }}
      />
    );
  };
  
  refresh() {
    if (this.props.loadData) {
      this.props.loadData();
    }
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView
            scalesPageToFit
            source={{ uri: this.state.modalUrl }}
          />
        </View>
      </Modal>
    );
  }

  renderItem({item}) {
    return (
      <DataUsageItem
        onPress={() => this.onModalOpen('https://www.google.com')}
        style={styles.dataUsageItem}
        index={1}
	dataUsage={item}
        //dataUsage={[{"volume_of_mobile_data": item.volume_of_mobile_data, "quarter": "2018-Q1", "_id": 55}]}
      />
    );
  }

  render() {
    const {
      dataUsage,
      listStyles = globalStyles.COMMON_STYLES.pageContainer,
      showLoadingSpinner
    } = this.props;
    const { initialLoading, refreshing } = this.state;
    return (
      (initialLoading && showLoadingSpinner
        ? (
          <View style={[listStyles, styles.loadingContainer]}>
            <ActivityIndicator
              animating
              size="small"
              {...this.props}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.refresh}
                />
              }
              enableEmptySections
              data={dataUsage}
	      renderItem={this.renderItem}
	      ItemSeparatorComponent={this.renderSeparator}
	      keyExtractor={(item,index) => index.toString()}
              style={listStyles}
            />
          </View>
        )
      )
    );
    
  }
}

MobileDataUsage.propTypes = {
  dataUsage: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  listStyles: ViewPropTypes.style,
  loadData: PropTypes.func,
  showLoadingSpinner: PropTypes.bool
};

MobileDataUsage.defaultProps = {
  showLoadingSpinner: true
};

const styles = StyleSheet.create({
  dataUsageItem: {
    marginBottom: 20
  },
  container: {
    flex: 1
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});
