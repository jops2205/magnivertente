import { MapPin } from "@phosphor-icons/react";

type LocationProps = {
  hasIcon?: boolean;
  limitedSize?: boolean;
};

const Location = ({ hasIcon, limitedSize }: LocationProps) => {
  return (
    <div className={`text-current ${hasIcon && "flex items-center gap-1"}`}>
      {hasIcon && <MapPin weight="bold" className="mt-0.5 min-w-4" />}
      <p className={`text-sm font-medium ${limitedSize && "max-w-72"}`}>
        Lugar Monte das Cruzes, Lote 7, Cabreiros, Braga - Portugal
      </p>
    </div>
  );
};

export { Location };
