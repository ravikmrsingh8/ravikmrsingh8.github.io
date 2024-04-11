import { Player } from "@lottiefiles/react-lottie-player";


interface LottiePlayerProps {
    src: string
}

export function LottiePlayer({src}: LottiePlayerProps) {
    return (
        <div className="z-n1 position-absolute" >
            <Player autoplay loop
                src={src}
                style={{height:"90vh"}}
            >
            </Player>
        </div>
    );
}