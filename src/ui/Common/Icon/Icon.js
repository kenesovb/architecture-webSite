import React from "react";
import PropTypes from "prop-types";

const getSize = (width, height, ratio) => {
    if (!width && !height) return { width: 13, height: 13 };
    if (width && height) return { width, height };

    return {
        ...width && { width, height: (width / ratio) },
        ...height && { width: (height * ratio), height }
    };
};

const getViewBox = (viewBox, originalWidth, originalHeight) =>
    viewBox || `0 0 ${originalWidth} ${originalHeight}`;

const Icon = ({
                  originalWidth,
                  originalHeight,
                  width,
                  height,
                  fill,
                  stroke,
                  children,
                  viewBox,
                  ...props
              }) => (
    <svg
        {...props}
        fill={fill}
        stroke={stroke}
        viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
        {...getSize(width, height, originalWidth / originalHeight)}
    >
        {children}
    </svg>
);

Icon.defaultProps = {
    fill: '#000000',
    stroke: ''
};

Icon.propTypes = {
    originalWidth: PropTypes.number,
    originalHeight: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    children: PropTypes.node,
    viewBox: PropTypes.string
};

export default Icon;
