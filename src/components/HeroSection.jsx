import React, { useEffect, useState } from "react";

function HeroSection() {
  const [isSplit, setIsSplit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplit(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-[90%] my-8">
        <div className="relative w-full h-full overflow-hidden">
        
        {/* Background Video */}
        <video className={` ${isSplit? "opacity-100": "opacity-0"} absolute top-0 left-0 w-full h-full object-cover`} autoPlay loop muted >
            <source
            src="src\assets\Untitled video - Made with Clipchamp (1).mp4"
            type="video/mp4" />
        </video>

        {/* Overlay for better text visibility */}
        <div className={`${isSplit? "absolute": "hidden"} absolute top-0 left-0 w-full h-full bg-black opacity-70`}></div>

        {/* Text Container */}
        <div className="flex items-center justify-center h-full w-full text-center">
            <h1 className={`text-6xl md:text-9xl font-bold text-pink-600 transition-transform duration-[3000] ${ isSplit ? "absolute top-0 left-0" : ""}`}>
                NEW
            </h1>
            <h1 className={`text-6xl md:text-9xl font-bold text-pink-600 transition-transform duration-[3000] ${ isSplit ? "absolute bottom-0 right-0" : ""}`}>
                MUSEUM
            </h1>
        </div>
        </div>
    </div>
  );
}

export default HeroSection;
