import svgPaths from "./svg-io7y36u7d";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8.056px] items-center justify-center relative size-full">
      <div className="relative shrink-0 size-[46.385px]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3846 46.3846">
          <g id="Subtract">
            <path d={svgPaths.p31a44400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3aedaf00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[21.482px] not-italic relative shrink-0 text-[21.482px] text-white whitespace-nowrap">
        <p className="mb-0">The Great</p>
        <p>Plumbing Co</p>
      </div>
    </div>
  );
}