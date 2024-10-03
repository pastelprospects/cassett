import * as React from 'react';
import classNames from 'classnames';

export default function KitFormBlock() {
  return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined
            )}
            {...annotations}>
          <script async data-uid="f37f510aea" src="https://deft-maker-2251.ck.page/f37f510aea/index.js"></script>
        </div>
    );
}
