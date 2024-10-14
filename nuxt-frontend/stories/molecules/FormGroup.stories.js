import FormGroup from '~/components/molecules/FormGroup.vue'; // Adjust path according to your project structure
import { action } from '@storybook/addon-actions'; // Import action for logging events

export default {
  title: 'Molecules/FormGroup', // The Storybook category
  component: FormGroup,
  argTypes: {
    id: { control: 'text', description: 'The id of the input field' },
    name: { control: 'text', description: 'The name of the input field' },
    label: { control: 'text', description: 'Label for the input field' },
    type: { control: 'text', description: 'Type of the input field (e.g., text, email, password)' },
    placeholder: { control: 'text', description: 'Placeholder text for the input field' },
    modelValue: { control: 'text', description: 'The value bound via v-model' },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is an input group molecule component built with the InputField atom. It supports v-model for two-way data binding and customizable input types, labels, and placeholders.',
      },
    },
  },
};

// Template for the InputGroup component
const Template = (args) => ({
  components: { FormGroup },
  setup() {
    return { args };
  },
  template: '<FormGroup v-bind="args" v-model="args.modelValue" @update:modelValue="args[\'update:modelValue\']" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  id: 'default-input',
  name: 'default',
  label: 'Default Input Field',
  type: 'text',
  placeholder: 'Enter text here',
  modelValue: '',
  'update:modelValue': action('update:modelValue'), // Log the update:modelValue event
};

// Email input story
export const EmailInput = Template.bind({});
EmailInput.args = {
  id: 'email-input',
  name: 'email',
  label: 'Email Input Field',
  type: 'email',
  placeholder: 'Enter your email',
  modelValue: '',
  'update:modelValue': action('update:modelValue'), // Log the update:modelValue event
};

// Password input story
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: 'password-input',
  name: 'password',
  label: 'Password Input Field',
  type: 'password',
  placeholder: 'Enter your password',
  modelValue: '',
  'update:modelValue': action('update:modelValue'), // Log the update:modelValue event
};
