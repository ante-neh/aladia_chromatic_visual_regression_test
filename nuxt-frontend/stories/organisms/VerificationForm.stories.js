import VerificationForm from '~/components/organisms/VerificationForm.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Organisms/VerificationForm',
  component: VerificationForm,
  parameters: {
    docs: {
      description: {
        component: 'This component allows users to input a verification code and submit it to proceed.',
      },
    },
  },
  argTypes: {
    user: { control: 'text', description: 'The username to be verified' },
    onSubmit: { action: 'Form Submitted', description: 'Triggered when the form is submitted' },
  },
};

const Template = (args) => ({
  components: { VerificationForm },
  setup() {
    return { args };
  },
  template: `
    <VerificationForm v-bind="args" @submit="args.onSubmit" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  user: 'aladia',
  onSubmit: action('Form Submitted'),
};
