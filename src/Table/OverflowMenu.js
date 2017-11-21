import React, { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import classNames from "classnames";

import Button from "../Button";
import Menu from "../Menu";

export default class OverflowMenu extends Component {
  static propTypes = {
    isFocusable: PropTypes.bool,
    theme: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    isFocusable: false,
    dir: "ltr"
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isFocused: false
    };
  }

  render() {
    const {
      isFocusable,
      theme,
      children,
      dir,
      onOpen,
      onClose,
      marginBottom,
      marginTop,
      maxHeight
    } = this.props;
    const { isFocused } = this.state;

    const trigger = ({ open }) =>
      <Button.Core
        className={classNames(theme.overflow_menu, {
          [theme.is_focused]: isFocused && !open,
          [theme.is_active]: open
        })}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
        tabIndex={isFocusable ? 0 : -1}
        ref={ref => {
          this.triggerNode = this.triggerNode || findDOMNode(ref);
        }}
      >
        &nbsp;
      </Button.Core>;

    return (
      <Menu
        positioning={["bottom_left", "top_left"]}
        stretched
        trigger={trigger}
        dir={dir}
        onOpen={onOpen}
        onClose={onClose}
        onChange={() => this.triggerNode.focus()}
        marginBottom={marginBottom}
        marginTop={marginTop}
        maxHeight={maxHeight}
      >
        {children}
      </Menu>
    );
  }
}