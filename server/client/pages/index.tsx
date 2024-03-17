import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Image
        src="/background.jpg"
        alt="Green/blue background"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          width: "200px", // Width of the white box
          height: "200px", // Height of the white box
          backgroundColor: "white", // Background color of the box
          position: "absolute", // Positioning the box absolutely inside the relative container
          top: "50%", // Centering the box vertically
          left: "50%", // Centering the box horizontally
          transform: "translate(-50%, -50%)", // Adjusting the exact center position
          zIndex: 10, // Ensuring the box is above the background image
        }}
      ></div>
    </div>
  );
}
