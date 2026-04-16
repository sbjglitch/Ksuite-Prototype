import svgPaths from "./svg-380fmauguj";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e306f00} fill="var(--fill-0, #1EBE72)" fillRule="evenodd" id="Path_2" />
          <path d="M16 10L11 15L8 12" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function MessageContent() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] relative shrink-0 whitespace-nowrap" data-name="Message Content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-end relative shrink-0 text-[#232f50] text-[16px]">
        <p className="leading-[24px]">This is a success message</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[#5c6e93] text-[14px]">
        <p className="leading-[20px]">{`Lorem ipsum dolor sit amet, consectetur `}</p>
      </div>
    </div>
  );
}

function MessageContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Message Container">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential">
        <Group />
      </div>
      <MessageContent />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Path" />
          <path d="M8 8L16 16" id="Path_2" stroke="var(--stroke-0, #A2A7B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 8L8 16" id="Path_3" stroke="var(--stroke-0, #A2A7B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function ToastMessage() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Toast Message">
      <div className="content-stretch flex items-start justify-between overflow-clip px-[16px] py-[20px] relative rounded-[inherit] size-full">
        <MessageContainer />
        <div className="relative shrink-0 size-[24px]" data-name="Close Icon">
          <Group1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)]" />
    </div>
  );
}