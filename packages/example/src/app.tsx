import ReactTree from '@jswork/react-tree/src/main';
import '@jswork/react-tree/src/style.scss';
import { TreeNodeProps } from '@jswork/react-tree/src';

function App() {
  const treeData = [
    {
      label: 'Giant planets',
      children: [
        {
          label: 'Gas giants',
          children: [
            { label: 'Jupiter' },
            { label: 'Saturn' },
          ],
        },
        {
          label: 'Ice giants',
          children: [
            { label: 'Uranus' },
            { label: 'Neptune' },
          ],
        },
      ],
    },
  ] as TreeNodeProps[];

  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <ReactTree items={treeData}/>
    </div>
  );
}

export default App;
