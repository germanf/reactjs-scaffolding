import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTest, addTest, deleteTest } from '../redux/actions/testActions';

const Test = class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchTest();
  }

  render() {
    return (
      <div>
        <Card>
          <CardText expandable={false}>
            Welcome to WhitePrompt scaffolding!
          </CardText>
        </Card>
      </div>
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
