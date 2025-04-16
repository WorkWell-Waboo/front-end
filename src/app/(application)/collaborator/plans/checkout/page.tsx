'use client'
import { Arrow } from "@/assets/svgs/arrow";
import { Button } from "@/components/ui/button";

function plansCheckout() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Button variant="secondary" className="rounded-full" onClick={handleBack}> 
            <Arrow className="text-primary h-3! w-2.5!"/>
          </Button>
          <h2 className="font-bold text-xl text-[#4f4f4f] ">Pagamento</h2>
        </div>
      </div>
    </main>
  );
}

export default plansCheckout;
