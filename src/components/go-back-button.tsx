'use client'
import { Arrow } from "@/assets/svgs/arrow";
import { Button } from "@/components/ui/button";

function GoBackButton() {
  const handleBack = () => {
    window.history.back();
  };
	return (
    <Button variant="secondary" className="w-9 h-9 rounded-full bg-[#E9EAF5] hover:bg-[#E9EAF5]/70" onClick={handleBack}> 
      <Arrow className="text-primary h-3! w-2.5!"/>
    </Button>
	);
}

export default GoBackButton;
