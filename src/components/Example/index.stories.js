import React from "react";

import { Example } from "./index";

export default {
  title: "Example/Example",
  component: Example,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Example {...args}> Dentro boton</Example>;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
};
