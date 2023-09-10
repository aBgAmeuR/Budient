import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Utensils, Clapperboard, Bus, ShoppingCart, CircleDollarSign } from 'lucide-react';

export const categories = [
  {
    value: 'Food',
    label: 'Food',
    icon: Utensils,
  },
  {
    value: 'Entertainement',
    label: 'Entertainement',
    icon: Clapperboard,
  },
  {
    value: 'Transportation',
    label: 'Transportation',
    icon: Bus,
  },
  {
    value: 'Shopping',
    label: 'Shopping',
    icon: ShoppingCart,
  },
  {
    value: 'Bills',
    label: 'Bills',
    icon: CircleDollarSign,
  },
  {
    value: 'Other',
    label: 'Other',
    icon: DotsHorizontalIcon,
  },
];
