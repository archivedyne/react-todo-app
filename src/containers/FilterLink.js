import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// StateをViewのプロパティに落としこむ
/*
 *
 * ownPropsはJSXに設定されたpropsの値。この場合だと<View filter="ga" />
 * stateは
 *
 */
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};

// つなぎこみ
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
