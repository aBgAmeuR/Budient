'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export const signUp = async (name: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            name,
        },
    });

    if (user) {
        return 'User with that name already exists.';
    }
    
    password = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            name,
            password,
        },
    });

    return "Successfully created new user!";
};