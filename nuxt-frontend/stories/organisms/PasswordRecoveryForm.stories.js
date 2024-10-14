import PasswordRecoveryForm from '~/components/organisms/PasswordRecoveryForm.vue'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/PasswordRecoveryForm',
  component: PasswordRecoveryForm,
  parameters: {
    docs: {
      description: {
        component: 'This component allows users to enter their email address to receive a password recovery link.',
      },
    },
  },
  argTypes: {
    email: { control: 'text', description: 'The email address input by the user' },
    onSubmit: { action: 'Form Submitted', description: 'Triggered when the form is submitted' },
  },
};


const Template = (args) => ({
  components: { PasswordRecoveryForm },
  setup() {
    return { args };
  },
  template: `
    <PasswordRecoveryForm v-bind="args" @submit="args.onSubmit" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  email: '',
  onSubmit: action('Form Submitted'),
};
