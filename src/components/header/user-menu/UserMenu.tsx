import { useTypedSelector } from '@app-store';
import { useSignoutMutation } from '@features/auth/AuthService';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Avatar, AvatarIcon, CircularProgress, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import React, { useState } from 'react';


const UserMenu = () => {
    const name = useTypedSelector((state) => state.auth.user?.lastname.toUpperCase());

    const [signout, { isLoading }] = useSignoutMutation();
    const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

    const handleLogout = async () => {
        setIsOpen(true); // Open modal on logout attempt
        try {
            await signout().unwrap();
        } finally {
            setIsOpen(false); // Close modal on completion (success or failure)
        }
    }

    return (
        <React.Fragment>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        icon={<AvatarIcon />} />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions">
                    <DropdownItem key="profile" className="max-h-20 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">{name}</p>
                        <Divider className='mt-2' />
                    </DropdownItem>
                    <DropdownItem key="settings" variant='shadow' endContent={<Icon fontSize={20} icon="material-symbols:settings" />}>
                        Settings
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout} key="logout" variant='flat' color="danger" endContent={<Icon fontSize={20} icon="material-symbols:logout" />}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Modal for showing loading state during logout */}
            <Modal isOpen={isLoading} isDismissable={false} placement='center' hideCloseButton>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Please Wait ... <Divider /></ModalHeader>
                    <ModalBody>
                        <CircularProgress className='m-auto' />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>

        </React.Fragment>
    )
}

export default UserMenu;
