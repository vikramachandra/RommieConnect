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
          width: "200px",
          height: "200px",
          backgroundColor: "black",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      ></div>
    </div>
  );
}
