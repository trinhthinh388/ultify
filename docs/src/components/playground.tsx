import { Sandpack } from '@codesandbox/sandpack-react';
import classNames from 'classnames';

export const Playground = ({
  files,
  className,
}: {
  files: Record<string, any>;
  className?: string;
}) => {
  return (
    <div className={classNames('', className)}>
      <Sandpack
        files={files}
        theme="auto"
        template="vanilla"
        options={{ layout: 'console', showTabs: false }}
        customSetup={{
          dependencies: {
            '@ultify/datastructure': 'latest',
          },
        }}
      />
    </div>
  );
};
