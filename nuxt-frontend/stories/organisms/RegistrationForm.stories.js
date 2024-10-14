import RegistrationForm from '~/components/organisms/RegistrationForm.vue';
import { action } from '@storybook/addon-actions'; 

export default {
  title: 'Organisms/RegistrationForm',
  component: RegistrationForm,
  parameters: {
    docs: {
      description: {
        component: 'This component provides a form for user registration with fields for name, surname, email, password, and confirm password.',
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'User\'s name' },
    surname: { control: 'text', description: 'User\'s surname' },
    email: { control: 'text', description: 'User\'s email address' },
    password: { control: 'text', description: 'User\'s password' },
    confirmPassword: { control: 'text', description: 'Confirmation password' },
    onSubmit: { action: 'Form Submitted', description: 'Triggered when the form is submitted' },
  },
};

const Template = (args) => ({
  components: { RegistrationForm },
  setup() {
    return { args };
  },
  template: `
    <RegistrationForm v-bind="args" @submit="args.onSubmit" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  onSubmit: action('Form Submitted'),
};
