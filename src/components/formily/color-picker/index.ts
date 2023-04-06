import { transformComponent } from '@formily/element-plus/esm/__builtins__';
import { connect, mapProps } from '@formily/vue';
import { ElColorPicker } from 'element-plus';
import './style';

export type ColorPickerProps = typeof ElColorPicker;

const TransformElColorPicker = transformComponent<ColorPickerProps>(ElColorPicker, {
  change: 'update:modelValue'
});

export const ColorPicker = connect(
  TransformElColorPicker,
  mapProps(
    {
      value: 'modelValue',
      readOnly: 'readonly'
    },
    (props) => {
      return {
        modelValue: props.modelValue
      };
    }
  )
);

export default ColorPicker;
