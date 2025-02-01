import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function KitFormBlock() {
  return (
        <div
            id={elementId}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-kit-block
                'w-full',
                className,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
            )}
            {...annotations}>
          <script async data-uid="f37f510aea" src="https://deft-maker-2251.ck.page/f37f510aea/index.js"></script>
        </div>
    );
}
