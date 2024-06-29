import { useAppDispatch, useTypedSelector } from '@app-store'
import IconButton from '@components/button/IconButton'
import { changeLanguage } from '@features/prefrences/PrefrencesSlice'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection } from '@nextui-org/react'

type Languages = {
    key: string
    name: string
}

const langs: Array<Languages> = [
    {
        key: "en",
        name: "English"
    },
    {
        key: "de",
        name: "Detsh"
    }
]


const LanguageSelecter = () => {
    const { language } = useTypedSelector(state => state.prefrences);
    const dispatch = useAppDispatch()


    return (
        <Dropdown>
            <DropdownTrigger>
                <IconButton>
                    <Icon icon="ion:language" height={25} />
                </IconButton>
            </DropdownTrigger>
            <DropdownMenu className='rounded-lg' aria-label="Static Langs"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={new Set([language])}

                onSelectionChange={(keys: Selection) => {
                    const selectedKey = Array.from(keys)[0];
                    dispatch(changeLanguage(selectedKey.toString()))
                }}
            >
                {
                    langs.map((lang) => (
                        <DropdownItem className='hover:bg-red-500 rounded-lg' key={lang.key}>{lang.name}</DropdownItem>
                    ))
                }

            </DropdownMenu>
        </Dropdown>
    )
}

export default LanguageSelecter
