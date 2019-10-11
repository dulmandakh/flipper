/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {styled, colors} from 'flipper';
import React from 'react';

const ErrorBarContainer = styled('div')({
  backgroundColor: colors.cherry,
  bottom: 0,
  color: '#fff',
  left: 0,
  lineHeight: '26px',
  position: 'absolute',
  right: 0,
  textAlign: 'center',
  zIndex: 2,
});

type Props = {
  text: string | null | undefined;
};

export default function ErrorBar(props: Props) {
  if (props.text == null) {
    return null;
  } else {
    return <ErrorBarContainer>{props.text}</ErrorBarContainer>;
  }
}
