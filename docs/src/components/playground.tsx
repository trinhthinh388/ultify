import { Sandpack } from '@codesandbox/sandpack-react';
import classNames from 'classnames';

export const Playground = ({
  files,
  className,
}: {
  files: Record<string, string>;
  className?: string;
}) => {
  return (
    <div className={classNames('mt-4', className)}>
      <Sandpack
        files={files}
        theme="auto"
        template="vanilla"
        options={{ layout: 'console', showTabs: false, showLineNumbers: true }}
        customSetup={{
          dependencies: {
            '@ultify/datastructure': 'latest',
          },
        }}
      />
    </div>
  );
};
