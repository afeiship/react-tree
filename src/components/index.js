import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import nxTreeWalk from '@feizheng/next-tree-walk';


const CLASS_NAME = 'react-tree';
const DEFAULT_TEMPLATE = ({ item, independent }, cb) => {
  if (independent) {
    return <li key={item.value} className={`${CLASS_NAME}__item is-item`}>{item.label}</li>
  } else {
    return (
      <li className={`${CLASS_NAME}__item is-parent is-item`}>
        <li key={item.value} className={`${CLASS_NAME}__item is-item`}>
          {item.label}
        </li>
        <ul className="is-list">
          {cb()}
        </ul>
      </li>
    )
  }
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    itemsKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
  };

  static defaultProps = {
    template: DEFAULT_TEMPLATE,
    itemsKey: 'children'
  };

  get childView() {
    const { items, itemsKey, template } = this.props;
    return nxTreeWalk(items, {
      template,
      itemsKey
    })
  }

  render() {
    const { className, items, itemsKey, template, ...props } = this.props;
    return (
      <ul
        data-component={CLASS_NAME}
        className={classNames('is-root', CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </ul>
    );
  }
}