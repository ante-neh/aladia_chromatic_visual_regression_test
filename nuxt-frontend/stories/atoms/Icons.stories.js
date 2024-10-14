import Icon from '~/components/atoms/Icon.vue';
import aladia from '../assets/aladiaLogo.png'

export default {
  title: 'Atoms/Icon', 
  component: Icon,
  argTypes: {
    src: { control: 'text', description: 'The source URL for the image' },
    alt: { control: 'text', description: 'Alternative text for the image' },
  },
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
};


export const CustomImage = Template.bind({});
CustomImage.args = {
  src: aladia,
  alt: 'Custom Image',
};
