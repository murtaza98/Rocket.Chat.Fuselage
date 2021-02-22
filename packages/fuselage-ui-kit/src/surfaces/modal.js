import {
  UiKitParserModal,
  TextObjectType,
  BlockElementType,
  LayoutBlockType,
} from '@rocket.chat/ui-kit';
import React from 'react';

import {
  actions,
  button,
  context,
  datePicker,
  divider,
  image,
  input,
  mrkdwn,
  multiStaticSelect,
  overflow,
  plainInput,
  plainText,
  section,
  staticSelect,
  linearScale,
} from '../renderers';
import ModalSurface from './ModalSurface';

class ModalParser extends UiKitParserModal {
  [TextObjectType.PLAIN_TEXT] = plainText;

  [TextObjectType.MARKDOWN] = mrkdwn;

  [BlockElementType.BUTTON] = button;

  [BlockElementType.DATEPICKER] = datePicker;

  [BlockElementType.IMAGE] = image;

  [BlockElementType.STATIC_SELECT] = staticSelect;

  [BlockElementType.MULTI_STATIC_SELECT] = multiStaticSelect;

  [BlockElementType.OVERFLOW] = overflow;

  [BlockElementType.PLAIN_TEXT_INPUT] = plainInput;

  [BlockElementType.LINEAR_SCALE] = linearScale;

  [LayoutBlockType.ACTIONS] = actions;

  [LayoutBlockType.CONTEXT] = context;

  [LayoutBlockType.DIVIDER] = divider;

  [LayoutBlockType.INPUT] = input;

  [LayoutBlockType.SECTION] = section;
}

export const modalParser = new ModalParser();

export const UiKitModal = (blocks, conditions = {}) => (
  <ModalSurface>
    {modalParser.render(blocks, { engine: 'rocket.chat', ...conditions })}
  </ModalSurface>
);
