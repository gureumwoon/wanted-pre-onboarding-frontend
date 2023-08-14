interface Props {
    size: 'medium' | 'large';
    bg: string;
    margin: string;
    color: string;
}

export type ButtonStyleProps = Partial<Props>;

export interface ButtonProps extends ButtonStyleProps {
    dataTestId?: string;
    children: string;
    _onClick?: React.MouseEventHandler<HTMLElement>;
    _disabled?: boolean;
}