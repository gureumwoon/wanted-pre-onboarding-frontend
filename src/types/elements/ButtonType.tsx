interface Props {
    size: 'medium' | 'large';
    bg: string;
    margin: string;
    color: string;
}

export type ButtonStyleProps = Partial<Props>;

export interface ButtonProps extends ButtonStyleProps {
    children: string;
    _onClick?: React.MouseEventHandler<HTMLElement>;
}