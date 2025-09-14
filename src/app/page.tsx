import { DiceRoller } from "@/components/dice-roller";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <DiceRoller />
      </div>
    </main>
  );
}