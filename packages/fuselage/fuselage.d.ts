declare module '@rocket.chat/fuselage' {
  import type { css } from '@rocket.chat/css-in-js';
  import { Placements } from '@rocket.chat/fuselage-hooks';
  import {
    AllHTMLAttributes,
    Context,
    CSSProperties,
    Dispatch,
    ElementType,
    FC,
    ForwardRefExoticComponent,
    PropsWithChildren,
    ReactNode,
    RefAttributes,
    SetStateAction,
    SVGAttributes,
  } from 'react';

  type FontScale = 'h1' | 's1' | 's2' | 'p1' | 'p2' | 'c1' | 'c2' | 'micro';

  type BoxProps = PropsWithChildren<{
    is?: ElementType;
    className?:
      | string
      | ReturnType<typeof css>
      | (string | ReturnType<typeof css>)[];
    style?: CSSProperties;
    border?: CSSProperties['border'];
    borderBlock?: CSSProperties['borderBlock'];
    borderBlockStart?: CSSProperties['borderBlockStart'];
    borderBlockEnd?: CSSProperties['borderBlockEnd'];
    borderInline?: CSSProperties['borderInline'];
    borderInlineStart?: CSSProperties['borderInlineStart'];
    borderInlineEnd?: CSSProperties['borderInlineEnd'];
    borderWidth?: CSSProperties['borderWidth'];
    borderBlockWidth?: CSSProperties['borderBlockWidth'];
    borderBlockStartWidth?: CSSProperties['borderBlockStartWidth'];
    borderBlockEndWidth?: CSSProperties['borderBlockEndWidth'];
    borderInlineWidth?: CSSProperties['borderInlineWidth'];
    borderInlineStartWidth?: CSSProperties['borderInlineStartWidth'];
    borderInlineEndWidth?: CSSProperties['borderInlineEndWidth'];
    borderStyle?: CSSProperties['borderStyle'];
    borderBlockStyle?: CSSProperties['borderBlockStyle'];
    borderBlockStartStyle?: CSSProperties['borderBlockStartStyle'];
    borderBlockEndStyle?: CSSProperties['borderBlockEndStyle'];
    borderInlineStyle?: CSSProperties['borderInlineStyle'];
    borderInlineStartStyle?: CSSProperties['borderInlineStartStyle'];
    borderInlineEndStyle?: CSSProperties['borderInlineEndStyle'];
    borderColor?: CSSProperties['borderColor'];
    borderBlockColor?: CSSProperties['borderBlockColor'];
    borderBlockStartColor?: CSSProperties['borderBlockStartColor'];
    borderBlockEndColor?: CSSProperties['borderBlockEndColor'];
    borderInlineColor?: CSSProperties['borderInlineColor'];
    borderInlineStartColor?: CSSProperties['borderInlineStartColor'];
    borderInlineEndColor?: CSSProperties['borderInlineEndColor'];
    borderRadius?: CSSProperties['borderRadius'];
    borderStartStartRadius?: CSSProperties['borderStartStartRadius'];
    borderStartEndRadius?: CSSProperties['borderStartEndRadius'];
    borderEndStartRadius?: CSSProperties['borderEndStartRadius'];
    borderEndEndRadius?: CSSProperties['borderEndEndRadius'];

    color?: CSSProperties['color'];
    backgroundColor?: CSSProperties['backgroundColor'];
    bg?: CSSProperties['backgroundColor'];
    opacity?: CSSProperties['opacity'];

    alignItems?: CSSProperties['alignItems'];
    alignContent?: CSSProperties['alignContent'];
    justifyItems?: CSSProperties['justifyItems'];
    justifyContent?: CSSProperties['justifyContent'];
    flexWrap?: CSSProperties['flexWrap'];
    flexDirection?: CSSProperties['flexDirection'];
    flexGrow?: CSSProperties['flexGrow'];
    flexShrink?: CSSProperties['flexShrink'];
    flexBasis?: CSSProperties['flexBasis'];
    justifySelf?: CSSProperties['justifySelf'];
    alignSelf?: CSSProperties['alignSelf'];
    order?: CSSProperties['order'];

    w?: CSSProperties['width'];
    width?: CSSProperties['width'];
    minWidth?: CSSProperties['minWidth'];
    maxWidth?: CSSProperties['maxWidth'];
    h?: CSSProperties['height'];
    height?: CSSProperties['height'];
    minHeight?: CSSProperties['minHeight'];
    maxHeight?: CSSProperties['maxHeight'];
    display?: CSSProperties['display'];
    verticalAlign?: CSSProperties['verticalAlign'];
    overflow?: CSSProperties['overflow'];
    overflowX?: CSSProperties['overflowX'];
    overflowY?: CSSProperties['overflowY'];

    position?: CSSProperties['position'];
    zIndex?: CSSProperties['zIndex'];
    inset?: CSSProperties['inset'];
    insetBlock?: CSSProperties['insetBlock'];
    insetBlockStart?: CSSProperties['insetBlockStart'];
    insetBlockEnd?: CSSProperties['insetBlockEnd'];
    insetInline?: CSSProperties['insetInline'];
    insetInlineStart?: CSSProperties['insetInlineStart'];
    insetInlineEnd?: CSSProperties['insetInlineEnd'];

    m?: CSSProperties['margin'];
    margin?: CSSProperties['margin'];
    mb?: CSSProperties['marginBlock'];
    marginBlock?: CSSProperties['marginBlock'];
    mbs?: CSSProperties['marginBlockStart'];
    marginBlockStart?: CSSProperties['marginBlockStart'];
    mbe?: CSSProperties['marginBlockEnd'];
    marginBlockEnd?: CSSProperties['marginBlockEnd'];
    mi?: CSSProperties['marginInline'];
    marginInline?: CSSProperties['marginInline'];
    mis?: CSSProperties['marginInlineStart'];
    marginInlineStart?: CSSProperties['marginInlineStart'];
    mie?: CSSProperties['marginInlineEnd'];
    marginInlineEnd?: CSSProperties['marginInlineEnd'];
    p?: CSSProperties['padding'];
    padding?: CSSProperties['padding'];
    pb?: CSSProperties['paddingBlock'];
    paddingBlock?: CSSProperties['paddingBlock'];
    pbs?: CSSProperties['paddingBlockStart'];
    paddingBlockStart?: CSSProperties['paddingBlockStart'];
    pbe?: CSSProperties['paddingBlockEnd'];
    paddingBlockEnd?: CSSProperties['paddingBlockEnd'];
    pi?: CSSProperties['paddingInline'];
    paddingInline?: CSSProperties['paddingInline'];
    pis?: CSSProperties['paddingInlineStart'];
    paddingInlineStart?: CSSProperties['paddingInlineStart'];
    pie?: CSSProperties['paddingInlineEnd'];
    paddingInlineEnd?: CSSProperties['paddingInlineEnd'];

    fontFamily?: CSSProperties['fontFamily'] | FontScale;
    fontSize?: CSSProperties['fontSize'] | FontScale;
    fontStyle?: CSSProperties['fontStyle'];
    fontWeight?: CSSProperties['fontWeight'] | FontScale;
    letterSpacing?: CSSProperties['letterSpacing'] | FontScale;
    lineHeight?: CSSProperties['lineHeight'] | FontScale;
    textAlign?: CSSProperties['textAlign'];
    textTransform?: CSSProperties['textTransform'];
    textDecorationLine?: CSSProperties['textDecorationLine'];

    elevation?: '0' | '1' | '2';
    invisible?: boolean;
    withRichContent?: boolean | string;
    withTruncatedText?: boolean;
    size?: CSSProperties['blockSize'];
    minSize?: CSSProperties['blockSize'];
    maxSize?: CSSProperties['blockSize'];
    fontScale?: FontScale;
  }> &
    Omit<AllHTMLAttributes<HTMLOrSVGElement>, 'className'> &
    Omit<SVGAttributes<SVGElement>, keyof AllHTMLAttributes<HTMLOrSVGElement>> &
    RefAttributes<unknown>;

  export const Box: ForwardRefExoticComponent<BoxProps>;

  type AccordionProps = BoxProps;
  type AccordionItemProps = Omit<BoxProps, 'title'> & {
    defaultExpanded?: boolean;
    title?: string;
  };
  export const Accordion: ForwardRefExoticComponent<AccordionProps> & {
    Item: ForwardRefExoticComponent<AccordionItemProps>;
  };

  type ActionButtonProps = ButtonProps & {
    icon: string;
    mini?: boolean;
    tiny?: boolean;
  };
  export const ActionButton: ForwardRefExoticComponent<ActionButtonProps>;

  type AutoCompleteProps = {
    value: unknown[];
    filter: string;
    setFilter?: (filter: string) => void;
    options?: { label: string; value: unknown }[];
    renderItem: ElementType;
    renderSelected?: ElementType;
    onChange: (value: unknown, action: 'remove' | undefined) => void;
    getLabel?: (option: { label: string; value: unknown }) => string;
    getValue?: (option: { label: string; value: unknown }) => unknown;
    renderEmpty?: ElementType;
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
  };
  export const AutoComplete: FC<AutoCompleteProps>;

  type AvatarProps = Omit<BoxProps, 'title' | 'size'> & {
    title?: string;
    size?:
      | 'x16'
      | 'x18'
      | 'x20'
      | 'x24'
      | 'x28'
      | 'x32'
      | 'x36'
      | 'x40'
      | 'x48'
      | 'x124'
      | 'x200'
      | 'x332';
    rounded?: boolean;
    objectFit?: boolean;
    url: string;
  };
  export const Avatar: ForwardRefExoticComponent<AvatarProps> & {
    Context: Context<{
      baseUrl: string;
    }>;
  };

  type BadgeProps = {
    is?: ElementType;
    variant?: 'primary' | 'danger' | 'warning';
    disabled?: boolean;
    className?: string;
    children?: any;
    title?: any;
  };
  export const Badge: ForwardRefExoticComponent<BadgeProps>;

  type BannerProps = {
    inline?: boolean;
    actionable?: boolean;
    closeable?: boolean;
    icon?: ReactNode;
    title?: string;
    variant?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
    onAction?: () => void;
    onClose?: () => void;
  } & AllHTMLAttributes<HTMLSectionElement>;
  export const Banner: FC<BannerProps>;

  type ButtonProps = BoxProps & {
    info?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    primary?: boolean;
    ghost?: boolean;
    nude?: boolean;
    ghostish?: boolean;
    small?: boolean;
    square?: boolean;
  };
  export const Button: ForwardRefExoticComponent<ButtonProps>;

  type ButtonGroupProps = BoxProps & {
    align?: 'start' | 'center' | 'end';
    stretch?: boolean;
    wrap?: boolean;
    vertical?: boolean;
    small?: boolean;
    medium?: boolean;
  };
  export const ButtonGroup: ForwardRefExoticComponent<ButtonGroupProps>;

  type CalloutProps = BoxProps;
  export const Callout: ForwardRefExoticComponent<CalloutProps>;

  type CheckBoxProps = BoxProps & {
    indeterminate?: boolean;
  };
  export const CheckBox: ForwardRefExoticComponent<CheckBoxProps>;

  type ChevronProps = Omit<BoxProps, 'size'> & {
    size?: BoxProps['width'];
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
  };
  export const Chevron: ForwardRefExoticComponent<ChevronProps>;

  type ChipProps = BoxProps;
  export const Chip: ForwardRefExoticComponent<ChipProps>;

  type DividerProps = BoxProps;
  export const Divider: ForwardRefExoticComponent<DividerProps>;

  type FieldProps = BoxProps;
  export const Field: ForwardRefExoticComponent<FieldProps> & {
    Row: ForwardRefExoticComponent<BoxProps>;
    Label: ForwardRefExoticComponent<BoxProps>;
    Description: ForwardRefExoticComponent<BoxProps>;
    Hint: ForwardRefExoticComponent<BoxProps>;
    Error: ForwardRefExoticComponent<BoxProps>;
  };

  type FieldGroupProps = BoxProps;
  export const FieldGroup: ForwardRefExoticComponent<FieldGroupProps>;

  type IconProps = Omit<BoxProps, 'size'> & {
    size?: BoxProps['width'];
  };
  export const Icon: ForwardRefExoticComponent<IconProps>;

  type InputBoxProps = BoxProps;
  type InputBoxSkeletonProps = BoxProps;
  export const InputBox: ForwardRefExoticComponent<InputBoxProps> & {
    Skeleton: ForwardRefExoticComponent<InputBoxSkeletonProps>;
  };

  export type MenuProps = Omit<ActionButtonProps, 'icon'> & {
    icon?: string;
    options: {
      [id: string]: {
        label: {
          title: string;
          icon: string;
        };
        action: Function;
      };
    };
    optionWidth?: BoxProps['width'];
    placement?: Placements;
    renderItem?: (props: OptionProps) => ReactNode;
  };
  export const Menu: ForwardRefExoticComponent<MenuProps>;

  type ModalProps = BoxProps;
  type ModalBackdropProps = BoxProps;
  type ModalCloseProps = BoxProps;
  type ModalContentProps = BoxProps;
  type ModalFooterProps = BoxProps;
  type ModalHeaderProps = BoxProps;
  type ModalThumbProps = BoxProps;
  type ModalTitleProps = BoxProps;
  export const Modal: ForwardRefExoticComponent<ModalProps> & {
    Backdrop: ForwardRefExoticComponent<ModalBackdropProps>;
    Close: ForwardRefExoticComponent<ModalCloseProps>;
    Content: ForwardRefExoticComponent<ModalContentProps>;
    Footer: ForwardRefExoticComponent<ModalFooterProps>;
    Header: ForwardRefExoticComponent<ModalHeaderProps>;
    Thumb: ForwardRefExoticComponent<ModalThumbProps>;
    Title: ForwardRefExoticComponent<ModalTitleProps>;
  };

  type NumberInputProps = BoxProps;
  export const NumberInput: ForwardRefExoticComponent<NumberInputProps>;

  type OptionsProps = BoxProps & {
    multiple?: boolean;
    options: [unknown, string, boolean?][];
    cursor: number;
    renderItem?: ElementType;
    renderEmpty?: ElementType;
    onSelect: (option: [unknown, string]) => void;
  };
  export const Options: ForwardRefExoticComponent<OptionsProps> & {
    AvatarSize: AvatarProps['size'];
  };

  type OptionProps = {
    id?: string;
    avatar?: ReactNode;
    label?: string;
    focus?: boolean;
    selected?: boolean;
    icon?: string;
    className?: BoxProps['className'];
    title?: string;
    value?: any;
  };
  export const Option: ForwardRefExoticComponent<OptionProps>;

  type PaginationProps = BoxProps & {
    count: number;
    current?: number;
    itemsPerPage?: 25 | 50 | 100;
    itemsPerPageLabel?: () => string;
    showingResultsLabel?: (props: {
      count: number;
      current: number;
      itemsPerPage: 25 | 50 | 100;
    }) => string;
    onSetCurrent?: Dispatch<SetStateAction<number>>;
    onSetItemsPerPage?: Dispatch<SetStateAction<25 | 50 | 100>>;
  };
  export const Pagination: ForwardRefExoticComponent<PaginationProps>;

  type PasswordInputProps = BoxProps & {
    error?: string;
  };
  export const PasswordInput: ForwardRefExoticComponent<PasswordInputProps>;

  type SearchInputProps = BoxProps & {
    addon?: ReactNode;
    error?: string;
  };
  export const SearchInput: ForwardRefExoticComponent<SearchInputProps>;

  type SkeletonProps = BoxProps & {
    variant?: 'rect';
  };
  export const Skeleton: ForwardRefExoticComponent<SkeletonProps>;

  type TableProps = BoxProps;
  type TableHeadProps = BoxProps;
  type TableBodyProps = BoxProps;
  type TableRowProps = Omit<BoxProps, 'action'> & {
    action?: boolean;
  };
  type TableCellProps = BoxProps & {
    align?: 'start' | 'center' | 'end';
    clickable?: boolean;
  };
  export const Table: ForwardRefExoticComponent<TableProps> & {
    Head: ForwardRefExoticComponent<TableHeadProps>;
    Body: ForwardRefExoticComponent<TableBodyProps>;
    Row: ForwardRefExoticComponent<TableRowProps>;
    Cell: ForwardRefExoticComponent<TableCellProps>;
  };

  type TagProps = BoxProps & {
    variant?: 'secondary' | 'primary' | 'danger';
  };
  export const Tag: ForwardRefExoticComponent<TagProps>;

  type TextAreaInputProps = BoxProps;
  export const TextAreaInput: ForwardRefExoticComponent<TextAreaInputProps>;

  type TextInputProps = BoxProps & {
    addon?: ReactNode;
    error?: string;
  };
  export const TextInput: ForwardRefExoticComponent<TextInputProps>;

  type TileProps = BoxProps;
  export const Tile: ForwardRefExoticComponent<TileProps>;

  type ThrobberProps = Omit<BoxProps, 'size'> & {
    size?: BoxProps['width'];
    inheritColor?: boolean;
  };
  export const Throbber: ForwardRefExoticComponent<ThrobberProps>;

  type ToggleSwitchProps = BoxProps;
  export const ToggleSwitch: ForwardRefExoticComponent<ToggleSwitchProps>;

  type MarginsProps = PropsWithChildren<{
    all?: BoxProps['margin'];
    block?: BoxProps['marginBlock'];
    blockStart?: BoxProps['marginBlockStart'];
    blockEnd?: BoxProps['marginBlockEnd'];
    inline?: BoxProps['marginInline'];
    inlineStart?: BoxProps['marginInlineStart'];
    inlineEnd?: BoxProps['marginInlineEnd'];
  }>;
  export const Margins: ForwardRefExoticComponent<MarginsProps>;

  type ScrollableProps = PropsWithChildren<{
    horizontal?: boolean;
    vertical?: boolean;
    onScrollContent?: (touching: { top: boolean }) => void;
  }>;
  export const Scrollable: ForwardRefExoticComponent<ScrollableProps>;

  type SelectOptions = [string, string][];
  type SelectProps = BoxProps & {
    error?: string;
    options: SelectOptions;
  };
  export const Select: ForwardRefExoticComponent<SelectProps>;

  type StatusBulletProps = {
    status?: 'loading' | 'online' | 'busy' | 'away' | 'offline';
    size?: 'small' | 'large';
  } & Omit<AllHTMLAttributes<HTMLSpanElement>, 'size'>;
  export const StatusBullet: FC<StatusBulletProps>;
}
