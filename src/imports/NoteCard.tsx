import svgPaths from "./svg-xipt6l5h8s";
import imgAvatar from "figma:asset/3bbe168eab287460eef89ff5351e750f87e0634b.png";
import imgImage from "figma:asset/beb2533f2c85b048fc5f30200142b8dfd0889992.png";
import imgImage35 from "figma:asset/f739562be998d02a6ba61cbb5e682aaac93ef8b2.png";

function Avatar() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[200px] size-[32px] top-1/2" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[39px] relative shrink-0 w-full" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[201.5px]" />
    </div>
  );
}

function PenInfo() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="PEN Info">
      <p className="relative shrink-0">PEN:</p>
      <p className="relative shrink-0">678 234</p>
    </div>
  );
}

function RoleInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px]" data-name="Role Info">
      <p className="relative shrink-0">Assistant Manager</p>
      <p className="relative shrink-0">E1</p>
      <PenInfo />
    </div>
  );
}

function EmployeeInfo() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Employee Info">
      <p className="leading-[20px] relative shrink-0 text-[#232f50] text-[14px]">Saleena P</p>
      <RoleInfo />
    </div>
  );
}

function UserCard() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="User card">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User card">
        <div className="bg-[#00b2eb] relative rounded-[46px] shrink-0 size-[32px]" data-name="_Avatar base">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="-translate-x-1/2 absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] text-[#00b2eb] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
            <Avatar />
          </div>
          <div aria-hidden="true" className="absolute border-[#00b2eb] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-[47.5px]" />
        </div>
        <EmployeeInfo />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <div className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-white whitespace-nowrap">
        <p className="mb-0">saleenap@gmail.com</p>
        <p>+91 9876543211</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Component 10">
      <UserCard />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Messages, Chat/Messages, Chat">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Group">
                    <g id="Group_2">
                      <path d={svgPaths.p78b8d80} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p7d16800} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p3824a100} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p482a80} id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.75333 12.86L4.4 14.0267" id="Path_5" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p185101c0} id="Path_6" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p103138d0} id="Path_7" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pe3b8b00} id="Path_8" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                    <g id="Path_9" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Component 10">
      <Component1 />
    </div>
  );
}

function NoteDateTime() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Note_date&time">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">Thu, Jan 23 2025, 04:48 PM</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[2]">
      <Component />
      <NoteDateTime />
    </div>
  );
}

function NoteNo() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Note_no.">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0c3080] text-[14px] text-center w-[25.476px]">01</p>
    </div>
  );
}

function Frame7() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#00b2eb] text-[14px] text-left whitespace-nowrap">Show More</p>
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#232f50] text-[14px] w-[min-content]">
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-0">Gsgah</p>
        <p>[File 687-E1-2025-IKM created on 19/09/2025 12:51:20,</p>
      </div>
      <div className="h-[48px] relative shrink-0 w-[481px]" data-name="image 35">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[350%] left-[0.04%] max-w-none top-0 w-[100.12%]" src={imgImage35} />
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[22px] items-center pl-[8px] relative w-full">
          <NoteNo />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.01%_-0.02%_-0.03%_-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g id="Group">
          <rect fill="var(--fill-0, #E83A7A)" height="12.005" id="Rectangle" rx="3.33333" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12.005" x="2.00063" y="2.00008" />
          <g id="Rectangle_2" />
          <path clipRule="evenodd" d={svgPaths.p18ff9400} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
          <path d="M9.33722 11.3388H11.3381" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DesignToolsPenEditCreateSquare() {
  return (
    <div className="opacity-80 relative shrink-0 size-[16px]" data-name="Design, Tools/pen-edit-create-square">
      <Group />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <DesignToolsPenEditCreateSquare />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#424242] text-[14px] text-left whitespace-nowrap">Marker in</p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#424242] text-[14px] text-left whitespace-nowrap">{`Legal Notice `}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.01%_-0.02%_-0.03%_-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g id="Group">
          <rect fill="var(--fill-0, #E83A7A)" height="12.005" id="Rectangle" rx="3.33333" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12.005" x="2.00063" y="2.00008" />
          <g id="Rectangle_2" />
          <path clipRule="evenodd" d={svgPaths.p18ff9400} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
          <path d="M9.33722 11.3388H11.3381" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DesignToolsPenEditCreateSquare1() {
  return (
    <div className="opacity-80 relative shrink-0 size-[16px]" data-name="Design, Tools/pen-edit-create-square">
      <Group1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <DesignToolsPenEditCreateSquare1 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#424242] text-[14px] text-left whitespace-nowrap">Marker in</p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#424242] text-[14px] text-left whitespace-nowrap">{`Legal Notice `}</p>
    </div>
  );
}

function Frame10() {
  return (
    <button className="cursor-pointer relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[56px] relative w-full">
          <div className="bg-white content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[8px] shrink-0" data-name="Note editor-chips">
            <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            <Frame5 />
            <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <g id="Group_2">
                    <path d="M11.3 4.7L4.7 11.3" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p418ba00} id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                  <g id="Path_3" />
                </g>
              </svg>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[8px] items-center p-[6px] relative rounded-[8px] shrink-0" data-name="Note editor-chips">
            <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            <Frame6 />
            <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <g id="Group_2">
                    <path d="M11.3 4.7L4.7 11.3" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p418ba00} id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                  <g id="Path_3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6%_-4.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.533 11.1997">
          <g id="Group">
            <path d={svgPaths.p30818700} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p1dd55200} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6%_-4.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.533 11.1997">
          <g id="Group">
            <path d={svgPaths.p30818700} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p1dd55200} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6%_-4.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.533 11.1997">
          <g id="Group">
            <path d={svgPaths.p30818700} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p1dd55200} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6%_-4.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.533 11.1997">
          <g id="Group">
            <path d={svgPaths.p30818700} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p1dd55200} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group9 />
    </div>
  );
}

function NoteChips() {
  return (
    <div className="relative shrink-0 w-full" data-name="Note_chips">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[5px] items-center pl-[56px] relative w-full">
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="_Draft_btn">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <g id="Path_4" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#00b2eb] text-[12px] whitespace-nowrap">Draft 1</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#b2e8f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="_Draft_btn">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <g id="Path_4" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#00b2eb] text-[12px] whitespace-nowrap">Draft 2</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#b2e8f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="_Draft_btn">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <g id="Path_4" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#00b2eb] text-[12px] whitespace-nowrap">Draft 3</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#b2e8f9] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                    <Group2 />
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Aadhar_card.pdf</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
            <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
                <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                  <Group4 />
                </div>
                <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Pan Card.jpg</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                    <Group6 />
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Aadhar_card.pdf</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
            <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
                <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                  <Group8 />
                </div>
                <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Legaldocument.pdf</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10 />
      <NoteChips />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[1]">
      <Frame4 />
      <Frame9 />
    </div>
  );
}

export default function NoteCard() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Note_card">
      <div className="content-stretch flex flex-col gap-[12px] isolate items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}