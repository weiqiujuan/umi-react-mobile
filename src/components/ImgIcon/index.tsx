import React, { CSSProperties, PropsWithChildren, useLayoutEffect, useState } from 'react'
import styles from './index.module.less'

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    readonly size?: number;
    readonly rotate?: number;
}

function mergeStyle(props: React.PropsWithChildren<IProps>, userStyle?: CSSProperties) {
    const style: CSSProperties = {}

    style.maxWidth = props?.size ?? 20
    style.maxHeight = props?.size ?? 20

    return Object.assign(style, userStyle)
}

function mergeClassName(...args: (string | undefined)[]) {
    return args.filter(Boolean).join(' ')
}

export default function ImgIcon(props: PropsWithChildren<IProps>) {
    const { src, style, size, rotate, className, ...otherProps } = props
    const [finalClassName, setFinalClassName] = useState(mergeClassName(styles.img, className))

    const finalStyle = mergeStyle({ size, rotate }, style)

    useLayoutEffect(() => {
        setFinalClassName(mergeClassName(styles.img, className))
    }, [className])

    let imgSrc = src;
    return <img className={finalClassName} src={imgSrc} style={finalStyle} {...otherProps} />
}
