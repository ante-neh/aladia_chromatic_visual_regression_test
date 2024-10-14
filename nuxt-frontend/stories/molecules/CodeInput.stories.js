import CodeInput from '~/components/molecules/CodeInput.vue';
import { action } from '@storybook/addon-actions'; 

export default {
  title: 'Molecules/CodeInput',
  component: CodeInput,
  parameters: {
    docs: {
      description: {
        component: 'A 6-character code input component built using the InputField atom. Each input field is limited to one character.',
      },
    },
  },
  argTypes: {
    onInput: { action: 'input', description: 'Logs each input value' }, 
    initialValues: {
      control: 'array',
      description: 'Initial values for the 6 input fields (array of strings)',
    },
  },
};

const Template = (args) => ({
  components: { CodeInput },
  setup() {
    return { args };
  },
  template: '<CodeInput v-bind="args" @input="args.onInput" />',
});

export const Default = Template.bind({});
Default.args = {
  onInput: action('Code input changed'),
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  onInput: action('Code input changed'),
  initialValues: ['1', '2', '3', '4', '5', '6'],
};
