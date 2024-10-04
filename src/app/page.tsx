import StarryBackground from "@/components/StarryBackground/StarryBackground";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <StarryBackground />
      <div className="flex flex-col justify-between mt-10">
        <h1 className="text-8xl text-white font-bold">Bienvenidos</h1>
        <Menu />
      </div>
    </div>
  );
}
