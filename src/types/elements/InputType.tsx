interface Props {
    size: 'medium' | 'large';
    margin: string;
}

export type InputStyleProps = Partial<Props>;

export interface InputProps extends InputStyleProps {
    label?: string;
    type?: string;
    placeholder?: string;
    _onChange?: (e: React.ChangeEvent<HTMLElement>) => void;
    _onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
}