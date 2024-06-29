import React from 'react';

import { Drawer } from 'vaul';

interface DrawerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    children: React.ReactNode;
    title?: React.ReactNode;
    CloseButton?: React.ReactNode;
    TriggerButton: React.ReactNode;
}

const AppDrawer: React.FC<DrawerProps> = ({ isOpen, title, setIsOpen, children, CloseButton, TriggerButton }) => {
    return (
        <Drawer.Root open={isOpen} onOpenChange={setIsOpen} direction="left">
            <Drawer.Trigger asChild>
                {TriggerButton}
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-overlay" />
                <Drawer.Content className="bg-element space-y-3 flex flex-col h-full w-full max-w-60 mt-24 fixed bottom-0 left-0 z-drawer p-4">
                    <Drawer.Title className='flex justify-between px-1 rounded-lg shadow-lg'>
                        {title}
                        {
                            (CloseButton != null) && <Drawer.Close className='self-end' asChild>
                                {CloseButton} 
                            </Drawer.Close>
                        }
                    </Drawer.Title>
                    {children}
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default AppDrawer;
