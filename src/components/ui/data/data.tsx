import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const categories = [
  {
    value: "Food",
    label: "Food",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Entertainement",
    label: "Entertainement",
    icon: CircleIcon,
  },
  {
    value: "Transportation",
    label: "Transportation",
    icon: StopwatchIcon,
  },
  {
    value: "Shopping",
    label: "Shopping",
    icon: CheckCircledIcon,
  },
  {
    value: "Bills",
    label: "Bills",
    icon: CrossCircledIcon,
  },
  {
    value: "Other",
    label: "Other",
    icon: CrossCircledIcon,
  },
  
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
