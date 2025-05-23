import userData from "@/data/userData";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, XIcon, LinkedInIcon } from "../icons";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import TextButton from "../ui/text-button";

const Header = () => {
    const { name, profession, github, twitter, linkedin } = userData.personalInfo;

    return (
        <div className="border-b border-border border-dashed sticky top-0 bg-site-background/80 backdrop-blur-md z-50">
            <div className="p-4 max-w-screen-xl w-full mx-auto border-border border-dashed xl:border-x">
                <div className="flex items-center gap-4 justify-between h-8">
                    <Link href="/" className="flex items-center gap-2 justify-center">
                        <Image
                            src="/pfp.png"
                            alt="logo"
                            width={104}
                            height={104}
                            className="size-10 object-cover rounded-md"
                            loading="lazy"
                        />
                        <div className="flex flex-col items-start justify-start font-medium tracking-tight text-sm">
                            <TextButton text={name} textSize={16} />
                            <span className="text-sm -mt-1 font-normal text-muted-foreground">
                                {profession}
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" asChild>
                            <Link target="_blank" href={twitter}>
                                <XIcon className="size-3.5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link target="_blank" href={github}>
                                <GithubIcon className="size-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link target="_blank" href={linkedin}>
                                <LinkedInIcon className="size-5" />
                            </Link>
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;