import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadData } from '../actions/dataUsageActions';
import MobileDataUsage from '../components/MobileDataUsage';
import { dataUsageSelector } from '../selectors/dataUsageSelectors';

const mapStateToProps = state => ({
  dataUsage: dataUsageSelector(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadData
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MobileDataUsage);
