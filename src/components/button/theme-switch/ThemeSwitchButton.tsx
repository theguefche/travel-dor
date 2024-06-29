import { useAppDispatch, useTypedSelector } from "@app-store";
import IconButton from "@components/button/IconButton";
import { changeThemeMode } from "@features/prefrences/PrefrencesSlice";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitchButton = () => {

    const { dark } = useTypedSelector(state => state.prefrences);
    const dispatch = useAppDispatch()

    const handleToggleDarkMode = () => {
        dispatch(changeThemeMode(!dark));
    };

    return (
        <IconButton>
            <DarkModeSwitch
                color="var(--text)"
                checked={dark}
                onChange={handleToggleDarkMode}
                size={25} />
        </IconButton>
    )
}

export default ThemeSwitchButton