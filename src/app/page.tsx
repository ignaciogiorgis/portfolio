import StarryBackground from "@/components/StarryBackground/StarryBackground";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <StarryBackground />
      <h1 className="text-8xl text-white font-bold">Bienvenidos</h1>
    </div>
  );
}
