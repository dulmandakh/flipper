/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import styled from 'react-emotion';

/**
 * A TextParagraph component.
 */
const TextParagraph = styled('div')({
  marginBottom: 10,

  '&:last-child': {
    marginBottom: 0,
  },
});
TextParagraph.displayName = 'TextParagraph';

export default TextParagraph;
