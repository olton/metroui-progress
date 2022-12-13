import React, {FC} from "react";
import classNames from "classnames";
import "./Bar.less"
import {PROGRESS_BAR_VARIANT} from "../Helpers/variants";

interface IProgressBarProps {
    val: number,
    buffer?: number,
    min?: number,
    max?: number,
    className?: string,
    loading?: boolean,
    value?: boolean,
    variant: PROGRESS_BAR_VARIANT
}

const ProgressBar: FC<IProgressBarProps> = ({
    val= 0,
    buffer = 0,
    min = 0,
    max = 100,
    className,
    variant = PROGRESS_BAR_VARIANT.DEFAULT,
    loading = false,
    value = false,
    ...props
}) => {
    const classes = classNames(
        "progress-bar",
        variant,
        className,
    )

    const total = max - min
    const bufferValue = buffer * 100 / total
    const barValue = val * 100 / total

    return (
        <div className={classes} {...props}>
            {loading && (
                <div className="progress-bar-loading"></div>
            )}
            {buffer && (
                <div className="progress-bar-buffer" style={{width: `${bufferValue}%`}}></div>
            )}
            {val && (
                <div className="progress-bar-value" style={{width: `${barValue}%`}}></div>
            )}
        </div>
    )
}

export default ProgressBar