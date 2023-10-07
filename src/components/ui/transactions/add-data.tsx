import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AddTransactionForm } from '@/components/forms/add-transaction-form';
import z from 'zod';
import { toast } from '../use-toast';

export const formSchema = z.object({
  name: z.string({ required_error: 'Please enter a name' }),
  date: z.date({ required_error: 'Please select a date' }),
  amount: z.string({ required_error: 'Please enter a amount' }).regex(/^-?\d+(\.\d{1,2})?$/, { message: 'Please enter a valid amount' }),
  category: z.string({ required_error: 'Please select a category' }),
  description: z.string({ required_error: 'Please enter a description' }).max(160, { message: 'Please enter a description with less than 160 characters' }),
});

const AddData = () => {
  const [open, setOpen] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="ml-auto hidden h-8 lg:flex">
          Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#ffffff] dark:bg-[#111315]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>Add a transaction to your list here. Click add when you&rsquo;re done.</DialogDescription>
        </DialogHeader>
        <AddTransactionForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default AddData;
