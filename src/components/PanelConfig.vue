<template>
  <div>
    <!-- <el-input-number :min="1" :max="10" /> -->
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
    </FormProvider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

import { createForm, onFormInputChange } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, Input, InputNumber } from '@formily/element-plus'
import ColorPicker from '@/components/formily/color-picker/index'

const schema: Ref<Object> = ref({
  properties: {
    x: {
      name: 'x',
      title: 'x',
      type: 'number',
      'x-component-props': {
        min: -10000,
        max: 10000,
        step: 1,
        precision: 0,
        default: 0,
        'value-on-clear': 0
      },
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber'
    },
    y: {
      name: 'y',
      title: 'y',
      'x-component-props': {
        min: -10000,
        max: 10000,
        step: 1,
        precision: 0,
        default: 0,
        'value-on-clear': 0
      },
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber'
    },
    stroke: {
      name: 'stroke',
      title: '边颜色',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ColorPicker'
    }
  }
})

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
    InputNumber,
    ColorPicker
  }
})

const oldValue: any = {}

const form = createForm({})
</script>
