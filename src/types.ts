export default interface PaginationiconProps {
    disabled?: boolean;
    handleClick?: any
}

export type OpenAndCloseIconProps = {
    handleClickIcon: () => void
}

export interface RadioIconProps {
    handleClick: (idenfier: string) => void;
    identifier: string;
}