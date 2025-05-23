"use client";

import { motion } from "framer-motion";

export default function TextButton({
    children,
    text,
    uppercase = "none",
    overrideClassName,
    circleLeft = true,
    circleRight = true,
    textSize = 12,
}: {
    children?: React.ReactNode;
    text?: string;
    uppercase?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
    overrideClassName?: string;
    circleLeft?: boolean;
    circleRight?: boolean;
    textSize?: number;
}) {
    const className =
        "relative flex flex-row items-center justify-center group transition-all duration-150";

    return (
        <button className={className}>
            {contentButton(
                children,
                textSize,
                uppercase,
                text,
                overrideClassName,
                circleLeft,
                circleRight
            )}
        </button>
    );
}

const contentButton = (
    children: React.ReactNode,
    textSize: number,
    uppercase: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana",
    text?: string,
    overrideClassName?: string,
    circleLeft?: boolean,
    circleRight?: boolean
) => {
    const characters = text?.split("") || [];

    return (
        <motion.div
            whileHover="hover"
            initial="initial"
            className={`relative cursor-pointer py-2 ${overrideClassName}`}
        >
            <div className="relative">
                <motion.div
                    className="relative overflow-hidden flex"
                    style={{
                        fontSize: `${textSize}px`,
                        lineHeight: `${textSize - 3}px`,
                        textTransform: uppercase,
                    }}
                >
                    <span
                        className="text-transparent"
                        style={{ fontSize: `${textSize}px` }}
                    >
                        {text}
                    </span>
                    <div className="absolute top-0 left-0 flex">
                        {characters.map((char, index) => (
                            <motion.span
                                key={`white-${index}`}
                                className="text-white"
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -textSize },
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                    delay: index * 0.01,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="absolute top-0 left-0 flex">
                        {characters.map((char, index) => (
                            <motion.span
                                key={`black-${index}`}
                                className="text-primary"
                                variants={{
                                    initial: { y: textSize },
                                    hover: { y: 0 },
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                    delay: index * 0.01,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
                {circleLeft && (
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 -left-[7px] w-[4px] h-[4px] bg-primary rounded-full pointer-events-none"
                        variants={{
                            initial: { opacity: 0, x: -8, filter: "blur(1px)" },
                            hover: {
                                opacity: 1,
                                x: 0,
                                scaleX: [4, 1],
                                filter: "blur(0px)",
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                },
                            },
                        }}
                        transition={{ duration: 0.2 }}
                    />
                )}
                {circleRight && (
                    <motion.div
                        className="absolute top-1/2 -translate-y-1/2 -right-[7px] w-[4px] h-[4px] bg-primary rounded-full pointer-events-none"
                        variants={{
                            initial: { opacity: 0, x: 8, filter: "blur(1px)" },
                            hover: {
                                opacity: 1,
                                x: 0,
                                scaleX: [4, 1],
                                filter: "blur(0px)",
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                },
                            },
                        }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </div>
        </motion.div>
    );
};
