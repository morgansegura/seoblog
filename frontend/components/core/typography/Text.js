import { forwardRef } from 'react'
import styles from './Text.module.scss'

const Text = (
    { size, children, className: givenClassName, as: Tag = 'div', ...props },
    ref,
) => {
    // Need explicit null and undefined check as size could be falsy with the valid size of 0
    const className =
        styles['f' + (size !== null && size !== undefined ? size : 300)] +
        (givenClassName ? ' ' + givenClassName : '')

    return (
        <Tag ref={ref} className={className} {...props}>
            {children}
        </Tag>
    )
}

export default forwardRef(Text)
