function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, scale: "1.5"}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, scale: "1.5"}}
            onClick={onClick}
        />
    );
}

function HiddenPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, visibility: "hidden"}}
            onClick={onClick}
        />
    );
}

function HiddenNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, visibility: "hidden"}}
            onClick={onClick}
        />
    );
}

export {
    NextArrow, HiddenNextArrow,
    PrevArrow, HiddenPrevArrow
}