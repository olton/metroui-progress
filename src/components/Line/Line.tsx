import React, {FC} from "react";
import classNames from "classnames";
import "./Line.less"
import {PROGRESS_BAR_VARIANT} from "../Helpers/variants";

interface IProgressLineProps {
    variant: PROGRESS_BAR_VARIANT,
    className?: string
}

const ProgressLine: FC<IProgressLineProps> = ({
    variant = PROGRESS_BAR_VARIANT.DEFAULT,
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