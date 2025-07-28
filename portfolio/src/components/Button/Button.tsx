import './Button.css'

type ButtonProps = {
    name: "contact-btn" | "card-btn" | "cv-btn";
    text: string;
    colorText?: string;
    className?: string;
    colorFrame?: string;
}

const Button: React.FC<ButtonProps> = ({ name, text, className, colorText, colorFrame }) => {
    const renderFrame = () => {
        switch (name) {
            case "contact-btn":
                return (<svg

                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2000 2000"
                    xmlSpace="preserve"
                    className="w-full h-full"
                >
                    <path
                        d="M1868.6 1132.9h-1.2L0 1126.3V982.7L115.7 867H2000v134.5l-.9.9zM6 1120.3l1860.1 6.7L1994 999.1V873H118.2L6 985.2z"
                        style={{
                            opacity: 0.25,
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                    <path
                        d="M1861.2 1115h-2.1l-1841.2-6.6V990.2L123.1 885H1982v109.1zM27.9 1098.5l1829.2 6.6 115.1-115v-95h-1845l-99.4 99.4v104z"
                        style={{
                            opacity: 0.5,
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                </svg>);
            case "card-btn":
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2000 2000"
                    xmlSpace="preserve"
                    className="w-full h-full"
                >
                    <path
                        d="M1969.1 1150.6H34.1V848.5H1969zM40.7 1144h1921.8V855H40.7z"
                        style={{
                            opacity: 0.25,
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                    <path
                        d="M1949.4 1130.9H53.8V868.1h1895.7zM64.7 1120h1873.8V879H64.7z"
                        style={{
                            opacity: 0.5,
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                    <path
                        d="M1991.3 994.1h-10.9V837.3h-477.3v-10.9h488.2zm0 179.5H298.6v-10.9h1681.8v-110.2h10.9zm-1761.1 0H8.7v-169h10.9v158.1h210.6zM19.6 935.5H8.7V826.4h1437.2v10.9H19.6z"
                        style={{
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                </svg>);
            case "cv-btn":
                return (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2000 2000"
                    xmlSpace="preserve"
                    className="w-full h-full mt-[15px]"
                >
                    <path
                        d="M9.1 1088.3H.3l298.5-298.5H2000l-298.4 298.4zm292.7-291.2L17.9 1081h1680.7l283.9-283.9z"
                        style={{
                            opacity: 0.5,
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                    <path
                        d="m52.9 1066.5 254.9-254.9h1639.6l-254.9 254.9zm259.9-242.8L82.1 1054.4h1605.5l230.7-230.7z"
                        style={{
                            opacity: 0.8,
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                    <path
                        d="M1715.1 1114.8h-456v-12.1h451l193.3-193.3 8.5 8.5zM98.6 969.8l-8.5-8.5L287 764.4h455.9v12.1H292z"
                        style={{
                            fill: colorFrame || "#aeff00",
                        }}
                    />
                </svg>);
            default:
                return null;
        }
    };

    return (
        <button className={`relative ${className}`}>
            {renderFrame()}
            <span className="absolute inset-0 flex items-center justify-center ${colorText}" style={{ color: colorText }}>
                {text}
            </span>
        </button>
    );
};

export default Button;
