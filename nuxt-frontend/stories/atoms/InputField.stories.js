import Input from '~/components/atoms/InputField.vue'; 
import { action } from '@storybook/addon-actions'; 

export default {
  title: 'Atoms/Input', 
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'This is a flexible input field component with support for text, email, password, and other input types. It supports v-model for two-way data binding.',
      },
    },
  },
  argTypes: {
    id: { control: 'text', description: 'The id of the input field' },
    name: { control: 'text', description: 'The name of the input field' },
    type: { control: 'text', description: 'The type of the input field (e.g., text, email, password)', defaultValue: 'text' },
    placeholder: { control: 'text', description: 'Placeholder text for the input field' },
    modelValue: { control: 'text', description: 'The value bound via v-model' },
    onInput: { action: 'input', description: 'Emitted when the input value changes' }, 
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" @update:modelValue="args.onInput" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'default-input',
  name: 'default',
  type: 'text',
  placeholder: 'Enter text',
  modelValue: '',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'email-input',
  name: 'email',
  type: 'email',
  placeholder: 'Enter your email',
  modelValue: '',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: 'password-input',
  name: 'password',
  type: 'password',
  placeholder: 'Enter your password',
  modelValue: '',
};
