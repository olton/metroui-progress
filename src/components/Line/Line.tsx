import React, {FC} from "react";
import classNames from "classnames";
import "./Line.less"
export enum PROGRESS_LINE_VARIANT {
    SMALL = "progress-line-small",
    DEFAULT = "progress-line-default",
    LARGE = "progress-line-large",
}

interface IProgressLineProps {
    variant: PROGRESS_LINE_VARIANT,
    className?: string
}

const ProgressLine: FC<IProgressLineProps> = ({
    variant = PROGRESS_LINE_VARIANT.DEFAULT,
    className,
}) => {
    const classes = classNames(
        "progress-line",
        variant,
        className,
    )

    return (
        <div className={classes}></div>
    )
}

export default ProgressLine