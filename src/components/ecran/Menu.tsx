'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Castle, Swords, UserPlus } from 'lucide-react';
import Button from 'components/Button';
import Notification from './amis/Notification';


export default function Menu() {
    const router = useRouter();

    return (
        <div className='flex flex-row items-center justify-center gap-6 h-full w-full text-black'>
                      <Notification/>

            <Button onClick={() => router.push("/equipe")} className='flex flex-col items-center justify-center gap-2 bg-yellow-400'>
            <Castle className='w-8 h-8' />
                <p className='text-sm font-bold'>Equipes</p>
            </Button>
            <Button onClick={() => router.push("/amis")} className='flex flex-col items-center justify-center gap-2 bg-red-500 text-white'>
                <UserPlus className='w-8 h-8' />
                <p className='text-sm font-bold'>Amis</p>
            </Button>
            <Button className='flex flex-col items-center justify-center gap-2 bg-yellow-400'>
                <Swords className='w-8 h-8' />
                <p className='text-sm font-bold'>Combats</p>
            </Button>
            
        </div>
    );
}