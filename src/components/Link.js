import React from 'react';

// Linkの実体は<span>~</span>もしくは<a>~</a>
export default class extends React.Component {
  render() {
    // これはLINKになるコンポーネントである
    // このcomponentのpropsに渡されたactiveによって切り替える
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           this.props.onClick()
         }}
      >
        {this.props.children}
      </a>
    );
  }
}

