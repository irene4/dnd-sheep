import React from "react";

class ReactiveInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionStart: 0,
      selectionEnd: 0,
      ref: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.state.ref && document.activeElement == this.state.ref) {
      this.state.ref.setSelectionRange(
        this.state.selectionStart,
        this.state.selectionEnd
      );
    }
  }

  changed(e) {
    this.setState({
      selectionStart: e.target.selectionStart,
      selectionEnd: e.target.selectionEnd,
      ref: e.target,
    });
    if (this.state.ref) {
      this.props.onChange({ target: this.state.ref });
    }
  }

  render() {
    return (
      <textarea
        {...this.props}
        onChange={this.changed.bind(this)}
        onFocus={this.changed.bind(this)}
        onClick={this.changed.bind(this)}
      ></textarea>
    );
  }
}

export default ReactiveInput;
