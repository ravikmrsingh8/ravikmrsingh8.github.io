import { Player } from "@lottiefiles/react-lottie-player";


interface ErrorPageProps {
    errorCode: number;
}

export function ErrorPage({errorCode}: ErrorPageProps) {
    return (
        <div className="vertical-center">
        <Player autoplay loop
            src={"/resources/animations/404.json"}
            style={{height: "50vh"}}
        ></Player>
        </div>
    );
}