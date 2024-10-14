import Button from '~/components/atoms/Button.vue';
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

export default {
  title: 'Atoms/Button',
  component: Button, 
  parameters: {
    docs: {
      description: {
        component: 'This is a versatile button component that can display an optional icon and customizable text via slots.', 
      },
    }
  },
  argTypes: {
    iconSrc: { control: 'text', description: 'Source URL for the button icon' },
    iconAlt: { control: 'text', description: 'Alt text for the icon' }, 
    default: { control: 'text', name: 'Button Text', description: 'Text for the button' }, 
    onClick: { action: 'clicked', description: 'Click event handler' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.default }}</Button>',
});

export const Default = Template.bind({});
Default.args = {
  default: 'Default Button',
  iconSrc: null,
};

export const WithGoogleIcon = Template.bind({});
WithGoogleIcon.args = {
  default: 'With Google Icon',
  iconSrc: google,
  iconAlt: 'Email Icon',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  default: 'Custom Icon Button',
  iconSrc: facebook,
  iconAlt: 'Custom Icon',
};
