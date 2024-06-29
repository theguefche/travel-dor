import { detectLanguage, detectThemeMode, saveLanguage, saveThemeMode } from '@features/prefrences/PrefrencesService';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18next from '@translation/i18n';

export interface PrefrencesState {
    language: string,
    dark: boolean
}

const initialState: PrefrencesState = {
    language: detectLanguage(),
    dark: detectThemeMode()
};

export const PrefrencesSlice = createSlice({
    name: 'Prefrences',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            i18next.changeLanguage(action.payload)
            saveLanguage(action.payload)
            state.language = action.payload
        },
        changeThemeMode: (state, action: PayloadAction<boolean>) => {
            console.log(action);
            if (action.payload) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            saveThemeMode(action.payload)
            state.dark = action.payload
        }
    },
});

export const { changeLanguage, changeThemeMode } = PrefrencesSlice.actions;

export default PrefrencesSlice.reducer;