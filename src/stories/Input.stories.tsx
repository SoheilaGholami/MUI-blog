import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import {
  SimpleButtonProps,
  SimpleButton,
} from "../components/button/SimpleButton";

export default {
  component: SimpleButton,
  title: "SimpleButton",
};

const Template = (args: SimpleButtonProps) => <SimpleButton {...args} />;

export const bb = Template.bind({});
