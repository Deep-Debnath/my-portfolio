import { Tooltip } from "@mui/material";
import { skillsData } from "../../../public/files";

export default function MobileLogo() {
  return (
    <section className="px-4 py-10">
      <div
        className="
          grid
          grid-cols-3 md:grid-cols-4
          gap-6 md:gap-8
          justify-items-center
        "
      >
        {skillsData.map(({ name, Icon, color, info }) => (
          <Tooltip title={info} key={name} placement="top" arrow>
            <div
              className="
                flex flex-col items-center
                gap-2
                rounded-xl
                px-4 py-5
                bg-cyan-900/20
                border border-cyan-500/20
                hover:border-cyan-400
                transition-all duration-300
                cursor-pointer
              "
            >
              {/* FIX: MUI Icons don't accept custom color props */}
              <Icon
                className="text-[36px] md:text-[44px]"
                style={{ color }}
              />

              <span className="text-xs text-gray-300">{name}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}