/** @format */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyNewComponent extends Component {
  static defaultProps = {
    name: '123',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요 제 이름은 {name} 입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

//  ({ name, children, favoriteNumber }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name} 입니다. <br />
//       children 값은 {children}입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// MyNewComponent.defaultProps = {
//   name: '123',
// };

// MyNewComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyNewComponent;
