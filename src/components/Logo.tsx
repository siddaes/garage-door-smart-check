import logoImage from "@/assets/usa-garage-experts-logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src={logoImage} 
        alt="USA Garage Experts Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};