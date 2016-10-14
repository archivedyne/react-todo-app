import React from 'react';

// Linkの実体は<span>~</span>もしくは<a>~</a>
export default class extends React.Component {

  static defaultProps = {
    clildren: '',
  }

  static propTypes = {
    active: React.PropTypes.bool,
    children: React.PropTypes.string,
    onClick: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  state = {}

  render() {
    // これはLINKになるコンポーネントである
    // このcomponentのpropsに渡されたactiveによって切り替える
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

