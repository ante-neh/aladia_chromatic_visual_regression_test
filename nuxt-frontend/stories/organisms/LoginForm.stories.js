import LoginForm from '~/components/organisms/LoginForm.vue'; // Adjust path accordingly
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component: 'This component displays a login form with email input, social login buttons, and form submission handling.',
      },
    },
  },
  argTypes: {
    email: { control: 'text', description: 'The email address input by the user' },
    onLoginSubmit: { action: 'Form Submitted', description: 'Triggered when the login form is submitted' },
  },
};

const Template = (args) => ({
  components: { LoginForm },
  setup() {
    return { args };
  },
  template: `
    <LoginForm v-bind="args" @submit="args.onLoginSubmit" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  email: '',
  onLoginSubmit: action('Form Submitted'),
};
