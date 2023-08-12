interface Props {
    size: 'medium' | 'large';
    margin: string;
}

export type InputStyleProps = Partial<Props>;

export interface InputProps extends InputStyleProps {
    label?: string;
    dataTestId: string;
    name?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    _onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    _onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
}