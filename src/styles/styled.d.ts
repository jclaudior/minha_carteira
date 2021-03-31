import 'styled-components';

declare module 'styled-components'{
    export interface DefaulTheme{
        title: string,

        color: {
            primary: string,
            secundary: string,
            tertiary: string,

            white: string,
            black: string,
            gray: string,

            success: string,
            info: string,
            warning: string
        }
    }
}