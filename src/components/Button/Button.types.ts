export type ButtonPropsType = {
    size: 'medium' | 'medium-submit' | 'small' | 'large'
    variant: 'primary' | 'secondary'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    role?:string
    iconLeft?: string
    iconRight?: string
    onClick?: any
}
