import PasswordSuccessForm from '~/components/organisms/PasswordSuccessForm.vue'; // Adjust path accordingly
import { action } from '@storybook/addon-actions'; // For logging actions

export default {
  title: 'Organisms/PasswordSuccessForm',
  component: PasswordSuccessForm,
  parameters: {
    docs: {
      description: {
        component: 'This component informs users that their password has been successfully added and provides a button to proceed to Aladia.',
      },
    },
  },
  argTypes: {
    onProceed: { action: 'Proceed Button Clicked', description: 'Triggered when the proceed button is clicked' },
  },
};

// Template to bind args to the PasswordSuccessForm component
const Template = (args) => ({
  components: { PasswordSuccessForm },
  setup() {
    return { args };
  },
  template: `
    <PasswordSuccessForm v-bind="args" @click="args.onProceed" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  onProceed: action('Proceed Button Clicked'),
};
