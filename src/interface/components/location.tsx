import { MapPin } from "@phosphor-icons/react";

type LocationProps = {
  hasIcon?: boolean;
};

const Location = ({ hasIcon }: LocationProps) => {
  return (
    <div className={`text-stone-100 ${hasIcon && "flex items-center gap-1"}`}>
      {hasIcon && <MapPin weight="bold" className="mt-0.5 min-w-4" />}
      <p className="text-sm font-medium">
        Lugar Monte das Cruzes, Lote 7, Cabreiros, Braga - Portugal
      </p>
    </div>
  );
};

export { Location };
