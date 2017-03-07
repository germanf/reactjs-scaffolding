import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTest } from '../redux/actions/testActions';

const Test = class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchTest();
  }

  render() {
    const { loading, items } = this.props;
    let view = <div>Loading data from server...</div>;

    if (!loading) {
      view = (<div>
        <div>
          <h2>Welcome to WhitePrompt scaffolding!</h2>
        </div>
        <div>
          <h4>Fetched from jsonplaceholder.typicode.com:</h4>
          <ul>
            { items.map(item => <li key={item.id}>{item.title}</li>) }
          </ul>
        </div>
      </div>);
    }

    return (
      <div>
        {view}
      </div>
    );
  }
};


// Redux
function mapStateToProps(state) {
  return {
    items: state.test.items,
    loading: state.test.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTest: bindActionCreators(fetchTest, dispatch),
  };
}

Test.defaultProps = {
  fetchTest: () => {},
  loading: false,
  items: [],
};

Test.propTypes = {
  fetchTest: React.PropTypes.func,
  loading: React.PropTypes.bool,
  items: React.PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
