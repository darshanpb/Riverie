import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Typography, { TypographyProps } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as Meta;

// Create a master template for mapping args to render the Typography component
const Template: Story<TypographyProps> = (args: TypographyProps) => (
  <Typography {...args} />
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { primary: true, children: "Primary text" };

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  primary: false,
  children: "Secondary text",
};
