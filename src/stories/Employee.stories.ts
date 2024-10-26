import type { Meta, StoryObj } from "@storybook/react";

import EmployeeComponent from "../orgchart/components/Employee";
import { Employee } from "../orgchart/data/types";

const meta = {
  title: "Employee",
  component: EmployeeComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmployeeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: Employee = {
  name: "string",
  avatarUrl: "string",
  type: "normie",
  cash: 10,
  culture: 10,
  trouble: false,
};

export const Primary: Story = {
  args: data,
};
