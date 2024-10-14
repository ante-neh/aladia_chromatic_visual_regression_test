import SocialLogin from '~/components/molecules/SocialLogin.vue'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/SocialLogin',
  component: SocialLogin,
  parameters: {
    docs: {
      description: {
        component: 'This component contains buttons to log in with Google, Facebook, and Apple.',
      },
    },
  },
  argTypes: {
    onGoogleClick: { action: 'Google Button Clicked', description: 'Click event for the Google login button' },
    onFacebookClick: { action: 'Facebook Button Clicked', description: 'Click event for the Facebook login button' },
    onAppleClick: { action: 'Apple Button Clicked', description: 'Click event for the Apple login button' },
  },
};


const Template = (args) => ({
  components: { SocialLogin },
  setup() {
    return { args };
  },
  template: `
    <SocialLogin 
      @googleClick="args.onGoogleClick" 
      @facebookClick="args.onFacebookClick"
      @appleClick="args.onAppleClick"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  onGoogleClick: action('Google Button Clicked'),
  onFacebookClick: action('Facebook Button Clicked'),
  onAppleClick: action('Apple Button Clicked'),
};
