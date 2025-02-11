import { useRef, useState, useEffect } from "react";
export function VideoCard(){
    const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsLoaded(true);
      };
    }
  }, []);
    return(
        <div className="p-2 before:hidden after:hidden 
        xl:[.grid>div:nth-child(4n+1)_&]:before:block xl:[.grid>div:nth-child(4n+1)_&]:after:block 
        lg:max-xl:[.grid>div:nth-child(3n+1)_&]:before:block lg:max-xl:[.grid>div:nth-child(3n+1)_&]:after:block 
        sm:max-lg:[.grid>div:nth-child(2n+1)_&]:before:block sm:max-lg:[.grid>div:nth-child(2n+1)_&]:after:block 
        max-sm:before:block max-sm:after:block 
        relative before:absolute before:top-0 before:h-px before:w-[200vw] 
        before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] 
        after:absolute after:bottom-0 after:h-px after:w-[200vw] 
        after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]"
        >
            <div className="relative aspect-[672/494] overflow-hidden rounded-xl outline outline-gray-950/5">
                {/* Static Image */}
                <img 
                alt="Shopify Preview" 
                width="672" 
                height="494" 
                decoding="async" 
                data-nimg="1" 
                className="absolute inset-0 h-full w-full" 
                style={{ color: "transparent" }} 
                src="/_next/static/media/shopify.com.776c655e.png" 
                />

                {/* Video (Hidden by default, fades in) */}
                <div style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s linear" }}>
                    <video
                        ref={videoRef}
                        preload="none"
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(white,black)]"
                    >
                        <source src="/showcase-videos/shopify.com.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}