import Checkbox from '~/components/atoms/Checkbox.vue';
import { ref, watch } from 'vue';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    modelValue: { control: 'boolean', description: 'Determines if the checkbox is checked or not' },
    default: { control: 'text', name: 'Label Text', description: 'Slot for the label of the checkbox' },
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    const checked = ref(args.modelValue);

    watch(() => args.modelValue, (newValue) => {
      checked.value = newValue;
    });

    return { args, checked };
  },
  template: '<Checkbox v-model="checked">{{ args.default }}</Checkbox>',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: false,
  default: 'I accept the terms and conditions',
};

export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
  default: 'I accept the terms and conditions',
};
