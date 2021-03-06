/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import styled from 'react-emotion';

type Props = {
  grow?: boolean;
  scrollable?: boolean;
};

const View = styled('div')((props: Props) => ({
  height: props.grow ? '100%' : 'auto',
  overflow: props.scrollable ? 'auto' : 'visible',
  position: 'relative',
  width: props.grow ? '100%' : 'auto',
}));
View.displayName = 'View';

export default View;
