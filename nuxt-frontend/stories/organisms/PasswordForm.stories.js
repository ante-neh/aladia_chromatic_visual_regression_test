import PasswordForm from '~/components/organisms/PasswordForm.vue'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/PasswordForm',
  component: PasswordForm,
  parameters: {
    docs: {
      description: {
        component: 'This component provides a form to input the user\'s password and a "Forgot Password?" link.',
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'Form Submitted', description: 'Triggered when the form is submitted' },
  },
};

const Template = (args) => ({
  components: { PasswordForm },
  setup() {
    return { args };
  },
  template: '<PasswordForm @submit="args.onSubmit" />',
});

export const Default = Template.bind({});
Default.args = {
  onSubmit: action('Form Submitted'),
};
