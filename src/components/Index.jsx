import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

// Material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTest } from '../redux/actions/testActions';

// Material-ui definitions
injectTapEventPlugin();

const Test = class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchTest();
  }

  render() {
    let view = <CircularProgress />;
    if (!this.props.loading) {
      view = <div>Welcome to WhitePrompt scaffolding!</div>;
    }

    return (
      <MuiThemeProvider>
        <div>
          {view}
        </div>
      </MuiThemeProvider>
    );
  }
};


// Redux
function mapStateToProps(state) {
  return {
    items: state.test.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTest: bindActionCreators(fetchTest, dispatch),
  };
}

Test.defaultProps = {
  fetchTest: () => {},
};

Test.propTypes = {
  fetchTest: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
