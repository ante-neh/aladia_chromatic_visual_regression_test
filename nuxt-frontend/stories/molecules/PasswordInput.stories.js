import PasswordInput from '~/components/molecules/PasswordInput.vue';
import { action } from '@storybook/addon-actions'; 

export default {
  title: 'Molecules/PasswordInput', 
  component: PasswordInput,
  argTypes: {
    id: { control: 'text', description: 'ID of the password input field' },
    name: { control: 'text', description: 'Name of the password input field' },
    placeholder: { control: 'text', description: 'Placeholder text for the input field' },
    showPassword: {
      control: 'boolean',
      description: 'Toggles between showing and hiding the password',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a password input component with a button to toggle the visibility of the password.',
      },
    },
  },
};

const Template = (args) => ({
  components: { PasswordInput },
  setup() {
    return { args };
  },
  template: '<PasswordInput v-bind="args" @click="args.onClick" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'password-input',
  name: 'password',
  placeholder: 'Enter your password',
  onClick: action('toggle-password'),
};
