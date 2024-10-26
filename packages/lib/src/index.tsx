import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-tree';

export type TreeNodeProps = {
  label: string;
  value: string;
  children: TreeNodeProps[];
}

export type ReactTreeProps = {
  items: TreeNodeProps[];
  /**
   * The children element.
   */
  children?: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

const TreeNode = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li key={node.value}>
      {hasChildren ? (
        <details open>
          <summary data-role="label">{node.label}</summary>
          <ul>
            {node.children.map((node) => (
              <TreeNode key={node.value} node={node} />
            ))}
          </ul>
        </details>
      ) : (
        <span data-role="label">{node.label}</span>
      )}
    </li>
  );
};

export default class ReactTree extends Component<ReactTreeProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};


  render() {
    const { className, children, items, ...rest } = this.props;
    return (
      <ul data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        {items.map((rootNode, index) => (
          <TreeNode key={index} node={rootNode} />
        ))}
      </ul>
    );
  }
}
