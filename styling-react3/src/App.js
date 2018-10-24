import React, { Component } from 'react';
//import classNames from 'classnames/bind'; // 다양한 형태로 가능
//import styles from  './App.scss';
import Button from './components/Button';
import StyledButton from './components/StyledButton';
//const cx = classNames.bind(styles);


class App extends Component {
  render() {
    //const isBlue = true;
    
    return (
      <div /*className={cx('box',{blue:isBlue})}*/>
        <Button>버튼</Button>
        <StyledButton big>버튼2</StyledButton>
      </div>
    );
  }
}

export default App;
