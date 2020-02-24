import React from 'react';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      errors: {},
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      ...state,
      greet: `Hello, ${props.text}`,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.props !== nextProps && this.state !== nextstat) {
  //     return trie
  //   }
  // }

  componentWillUnmount() {
    document.removeEventListener('copy');
    clearInterval(this.interval);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.warn('e.target.value', e.target.value);
  };

  onButtonClick = () => {
    const { name, password, errors } = this.state;
    if (!name) {
      this.setState({ errors: { name: 'Required' } });
    } else if (!password) {
      this.setState({ errors: { password: 'Required' } });
    } else {
      this.setState({ errors: {} });
    }
  };

  componentDidMount() {
    this.inputRef.focus();
    document.addEventListener('copy', () => {
      console.log('copied');
    });

    this.interval = setInterval(() => {
      console.log('hello');
    }, 1000);
  }

  render() {
    console.log('render');
    const { name, password, errors, greet } = this.state;
    return (
      <div>
        <h1>{greet}</h1>
        <input
          ref={ref => {
            this.inputRef = ref;
          }}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.onChange}
        />
        {errors.name && <h4>{errors.name}</h4>}
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={this.onChange}
        />
        {errors.password && <h4>{errors.password}</h4>}
        <button type="button" onClick={this.onButtonClick}>
          Click Me
        </button>
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;

// import React from 'react';
// import PropTypes from 'prop-types';

// const App = ({ text }) => (
//   <div>
//     <h1>{text}</h1>
//     <input type="password" name="name" id="name" />
//   </div>
// );

// App.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// export default App;
