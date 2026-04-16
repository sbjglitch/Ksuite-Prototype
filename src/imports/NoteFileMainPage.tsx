import svgPaths from "./svg-vl55ll2u5q";
import imgImage from "figma:asset/b6b5c948366a75c59e23c18e19859ddbd398a32b.png";
import imgAvatar from "figma:asset/3bbe168eab287460eef89ff5351e750f87e0634b.png";
import imgImage1 from "figma:asset/fdd1b0ce4619406f26c90d3e14204afedb88aef6.png";

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center pl-[16px] pr-[12px] py-[16px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(232,239,244,0.68)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Information Kerala Mission</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Frame">
      <div className="h-[47px] relative shrink-0 w-[84px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12px]" data-name="Frame">
      <div className="absolute inset-[-5.71%_-6.66%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5984 15.5982">
          <g id="Frame">
            <path d={svgPaths.p2dd7a200} id="Vector" stroke="var(--stroke-0, #00B2EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59795" />
            <path clipRule="evenodd" d={svgPaths.p15ab3cc0} fillRule="evenodd" id="Vector_2" stroke="var(--stroke-0, #00B2EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59795" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(0,178,236,0.2)] content-stretch flex items-center justify-center p-[8px] relative rounded-[34px] shrink-0 size-[40px]" data-name="Frame">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="Frame">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#232f50] text-[14px]">
        <p>
          <span className="leading-[32px]">{`Dr. `}</span>
          <span className="font-['Manrope:Bold',sans-serif] font-bold leading-[32px]">K.P.Noufal</span>
        </p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#5c6e93] text-[13px]">
        <p className="leading-[99.02999877929688%]">{`Deputy Director (R&D), DD R And D`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] relative shrink-0" data-name="Frame">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Path" />
          <path d="M13.6 20H10.4" id="Path_2" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pc3fa680} id="Path_3" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3851e300} id="Path_4" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c54d980} id="Path_5" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_6">
            <path clipRule="evenodd" d={svgPaths.p100f2620} fill="var(--fill-0, #E83A7A)" fillRule="evenodd" />
            <path d={svgPaths.p100f2620} stroke="var(--stroke-0, #F2F6FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f2f6ff] relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Interface, Essential/Bell, Notifications">
        <Group />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0" data-name="Frame">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[8px] relative w-full">
          <Frame2 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Inbox</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <g id="Group_2">
              <path d="M5.00024 12.0005H19.0002" id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p3a158400} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M10.0002 17L5.00024 12" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g id="Path_4" />
          </g>
        </svg>
      </button>
      <Frame13 />
      <div className="relative shrink-0 size-[24px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <path d="M10 16L14 12L10 8" id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative rounded-[4px] shrink-0">
        <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#0c3080] text-[#232f50] text-[0px] text-[14px] whitespace-pre">
          <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal]">{`File  No.`}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal]">178-E3-2025-IKM</span>
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/cursor-fast-move">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p1c98fc00} fillRule="evenodd" id="Path" stroke="var(--stroke-0, #09327B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M13.3333 2.66667H8" id="Path_2" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10.6667 5.33333H13.3333" id="Path_3" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_4" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#323232] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Quick Access</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <Frame17 />
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="User/single-user-search_1">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.pc45d380} id="Path" stroke="var(--stroke-0, #09327B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="7.33333" cy="4.66667" id="Oval" r="2.66667" stroke="var(--stroke-0, #09327B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="11.6296" cy="11.037" id="Oval_2" r="2.37037" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.95352 12.7131L8.66667 14" id="Path_2" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Rectangle" />
            <g id="Path_3" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#323232] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Route Keys and Users</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[16px]" data-name="Frame 1000011580/Files/Property 24">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <g id="Path" />
            <path clipRule="evenodd" d={svgPaths.p28764100} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #09327B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10.6667 11.3333H5.33333" id="Path_3" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10.6667 9H5.33333" id="Path_4" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M7.33333 6.66667H5.33333" id="Path_5" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pb8df0dc} id="Path_6" stroke="var(--stroke-0, #09327B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#323232] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">File Summary</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.01 24.01">
        <g id="Group">
          <path d="M5.50263 12.005H18.5077" id="Path" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.50263 16.0067H18.5077" id="Path_2" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.50229 8.00333H18.5074" id="Path_3" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Rectangle" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/menu-burger">
        <Group1 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Frame15 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[8px] relative w-full">
          <Frame12 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start shrink-0 sticky top-0 w-full z-[2]" data-name="Frame">
      <Frame1 />
      <Frame11 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#09327b] text-[16px]">Notes</p>
      <p className="font-['Manrope:Bold',sans-serif] font-bold relative shrink-0 text-[#232f50] text-[14px]">(04)</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p1eab5580} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p210a9f80} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]" data-name="Frame">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Search Note</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]" data-name="Frame">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Expand</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Search, Loupe">
                <Group2 />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame27 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Full Screen, Circle">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Group">
                    <g id="Group_2">
                      <path d={svgPaths.p14925780} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M8 5.33333H10.6667V8" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <path d="M8 10.6667H5.33333V8" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                      <circle cx="8" cy="8" id="Oval" r="6" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    </g>
                    <g id="Path_4" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame28 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] relative w-full">
          <Frame25 />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full z-[3]" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute left-[2px] pointer-events-none rounded-[200px] size-[36px] top-[2px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[200px]">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] rounded-[201.5px]" />
    </div>
  );
}

function UserCard() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User card">
      <div className="bg-[#e5f7fd] relative rounded-[46px] shrink-0 size-[40px]" data-name="Avatars">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <p className="-translate-x-1/2 absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] text-[#00b2eb] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
          <Avatar />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#99e0f7] border-solid inset-0 pointer-events-none rounded-[46px]" />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]" data-name="Component 10">
      <UserCard />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] isolate items-start left-0 overflow-clip rounded-[500px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] top-0 w-[40px]" data-name="Frame">
      <Component />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="Frame">
      <p className="relative shrink-0">PEN:</p>
      <p className="relative shrink-0">678 234</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px]" data-name="Frame">
      <p className="relative shrink-0">Assistant Manager</p>
      <p className="relative shrink-0">E1</p>
      <Frame39 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="leading-[20px] relative shrink-0 text-[#3c4449] text-[14px]">Anwar R</p>
      <Frame38 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <div className="relative rounded-[500px] shrink-0 size-[40px]" data-name="Card">
        <Frame36 />
      </div>
      <Frame37 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Contact</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Frame35 />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Contact-Button">
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
          <Frame121 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame34 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">Thu, Jan 23 2025, 04:48 PM</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full z-[2]" data-name="Frame">
      <Frame33 />
      <Frame40 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center px-[56px] relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#323232] text-[14px] whitespace-nowrap">
        <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.129px]">Subject</span>
        <span className="leading-[22.129px]">{` : G`}</span>
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[22.129px] relative shrink-0 text-[#0c3080] text-[14px] text-center w-[25px]">01</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[22px] items-center pl-[8px] relative w-full">
          <Frame45 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#232f50] text-[14px]">[File 91-E1-2025-IKM created on 23/01/2025 16:45:35, Draft No 1 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:20, Draft No 2 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:55]</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-7.5%_-5.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.833 11.4997">
          <g id="Group">
            <path d={svgPaths.p9a8a760} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pffc900} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[5px] items-center px-[56px] relative w-full">
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[89px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                    <Group3 />
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Aadhar_card.pdf</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <Frame42 />
      <Frame46 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[676px]" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[12px] isolate items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Frame32 />
        <Frame41 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute left-[2px] pointer-events-none rounded-[200px] size-[36px] top-[2px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[200px]">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] rounded-[201.5px]" />
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
      <p className="relative shrink-0">{`Deputy Director (R&D), DD R And D`}</p>
      <p className="relative shrink-0">E1</p>
      <PenInfo />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold items-start justify-center relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="leading-[20px] relative shrink-0 text-[#232f50] text-[14px]">Anwar R</p>
      <RoleInfo />
    </div>
  );
}

function Frame122() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Contact</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User card">
        <div className="bg-[#fdebf2] relative rounded-[46px] shrink-0 size-[40px]" data-name="Avatars">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="-translate-x-1/2 absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] text-[#e83a7a] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">NA</p>
            <Avatar1 />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#f6b0ca] border-solid inset-0 pointer-events-none rounded-[46px]" />
        </div>
        <Frame51 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Contact-Button">
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
          <Frame122 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame50 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">Thu, Jan 23 2025, 04:48 PM</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full z-[2]" data-name="Frame">
      <Frame49 />
      <Frame52 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[637px] z-[1]" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[22.129px] relative shrink-0 text-[#09327b] text-[14px] text-center w-[26px]">04</p>
      <div className="aspect-[579/411] flex-[1_0_0] min-h-px min-w-px relative" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] isolate items-start p-[16px] relative w-full">
          <Frame48 />
          <Frame53 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute left-[2px] pointer-events-none rounded-[200px] size-[36px] top-[2px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[200px]">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] rounded-[201.5px]" />
    </div>
  );
}

function PenInfo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="PEN Info">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">PEN:678 234</p>
    </div>
  );
}

function RoleInfo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Role Info">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">Assistant Manager</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">E1</p>
      <PenInfo1 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Anwar R</p>
      <RoleInfo1 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Contact</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User card">
        <div className="bg-[#e5f7fd] relative rounded-[46px] shrink-0 size-[40px]" data-name="Avatars">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="-translate-x-1/2 absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] text-[#00b2eb] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
            <Avatar2 />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#99e0f7] border-solid inset-0 pointer-events-none rounded-[46px]" />
        </div>
        <Frame58 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Contact-Button">
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
          <Frame123 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame57 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">Thu, Jan 23 2025, 04:48 PM</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full z-[2]" data-name="Frame">
      <Frame56 />
      <Frame59 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center px-[56px] relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#323232] text-[14px] whitespace-nowrap">
        <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.129px]">Subject</span>
        <span className="leading-[22.129px]">{` : G`}</span>
      </p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[22.129px] relative shrink-0 text-[#0c3080] text-[14px] text-center w-[25px]">01</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[22px] items-center pl-[8px] relative w-full">
          <Frame64 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#232f50] text-[14px]">[File 91-E1-2025-IKM created on 23/01/2025 16:45:35, Draft No 1 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:20, Draft No 2 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:55]</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-7.5%_-5.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.833 11.4997">
          <g id="Group">
            <path d={svgPaths.p9a8a760} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pffc900} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group6 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[5px] items-center px-[56px] relative w-full">
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[89px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                    <Group5 />
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Aadhar_card.pdf</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <Frame61 />
      <Frame65 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] isolate items-start p-[16px] relative w-full">
          <Frame55 />
          <Frame60 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute left-[2px] pointer-events-none rounded-[200px] size-[36px] top-[2px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[200px]">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] rounded-[201.5px]" />
    </div>
  );
}

function PenInfo2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="PEN Info">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">PEN:678 234</p>
    </div>
  );
}

function RoleInfo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Role Info">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">Assistant Manager</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">E1</p>
      <PenInfo2 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Anwar R</p>
      <RoleInfo2 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Contact</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User card">
        <div className="bg-[#e5f7fd] relative rounded-[46px] shrink-0 size-[40px]" data-name="Avatars">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="-translate-x-1/2 absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] text-[#00b2eb] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
            <Avatar3 />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#99e0f7] border-solid inset-0 pointer-events-none rounded-[46px]" />
        </div>
        <Frame70 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Contact-Button">
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
          <Frame124 />
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame69 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">Thu, Jan 23 2025, 04:48 PM</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full z-[2]" data-name="Frame">
      <Frame68 />
      <Frame71 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center px-[56px] relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#323232] text-[14px] whitespace-nowrap">
        <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.129px]">Subject</span>
        <span className="leading-[22.129px]">{` : G`}</span>
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[22.129px] relative shrink-0 text-[#0c3080] text-[14px] text-center w-[25px]">01</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[22px] items-center pl-[8px] relative w-full">
          <Frame76 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#232f50] text-[14px]">[File 91-E1-2025-IKM created on 23/01/2025 16:45:35, Draft No 1 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:20, Draft No 2 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:55]</p>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-7.5%_-5.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.833 11.4997">
          <g id="Group">
            <path d={svgPaths.p9a8a760} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pffc900} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group8 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[5px] items-center px-[56px] relative w-full">
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[89px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                    <Group7 />
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Aadhar_card.pdf</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <Frame73 />
      <Frame77 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] isolate items-start p-[16px] relative w-full">
          <Frame67 />
          <Frame72 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="absolute left-[2px] pointer-events-none rounded-[200px] size-[36px] top-[2px]" data-name="Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[200px]">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[105.26%]" src={imgAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] rounded-[201.5px]" />
    </div>
  );
}

function PenInfo3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="PEN Info">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">PEN:678 234</p>
    </div>
  );
}

function RoleInfo3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Role Info">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">Assistant Manager</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">E1</p>
      <PenInfo3 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Anwar R</p>
      <RoleInfo3 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Contact</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User card">
        <div className="bg-[#e5f7fd] relative rounded-[46px] shrink-0 size-[40px]" data-name="Avatars">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <p className="-translate-x-1/2 absolute font-['Manrope:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] text-[#00b2eb] text-[15px] text-center top-[calc(50%-5px)] whitespace-nowrap">SP</p>
            <Avatar4 />
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#99e0f7] border-solid inset-0 pointer-events-none rounded-[46px]" />
        </div>
        <Frame82 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Contact-Button">
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
          <Frame125 />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame81 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">Thu, Jan 23 2025, 04:48 PM</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full z-[2]" data-name="Frame">
      <Frame80 />
      <Frame83 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center px-[56px] relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#323232] text-[14px] whitespace-nowrap">
        <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.129px]">Subject</span>
        <span className="leading-[22.129px]">{` : G`}</span>
      </p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[22.129px] relative shrink-0 text-[#0c3080] text-[14px] text-center w-[25px]">01</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[22px] items-center pl-[8px] relative w-full">
          <Frame88 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#232f50] text-[14px]">[File 91-E1-2025-IKM created on 23/01/2025 16:45:35, Draft No 1 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:20, Draft No 2 (Proceedings) created by Saleena P(100059) on 23/01/2025 16:46:55]</p>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[20.83%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-7.5%_-5.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.833 11.4997">
          <g id="Group">
            <path d={svgPaths.p9a8a760} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pffc900} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group10 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[5px] items-center px-[56px] relative w-full">
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[89px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[91px]" data-name="Button">
            <div className="bg-[#e5f7fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/document-modern-text">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d="M4.66667 8H11.3333" id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <rect height="12" id="Rectangle" rx="3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" x="2" y="2" />
                        <path d="M4.66667 10.6667H11.3333" id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 5.33333H8" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
            <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
                    <Group9 />
                  </div>
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#232f50] text-[12px] whitespace-nowrap">Aadhar_card.pdf</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[1]" data-name="Frame">
      <Frame85 />
      <Frame89 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] isolate items-start p-[16px] relative w-full">
          <Frame79 />
          <Frame84 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative" data-name="Frame">
      <Frame31 />
      <Frame47 />
      <Frame54 />
      <Frame66 />
      <Frame78 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="h-full relative shrink-0 w-[6px]" data-name="Frame">
      <div className="absolute bg-[#cddce7] h-[80px] left-0 rounded-[15px] top-0 w-[6px]" data-name="Rectangle" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative rounded-[8px] w-full z-[2]" data-name="Frame">
      <Frame30 />
      <Frame90 />
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p1dd3b600} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group12 />
    </div>
  );
}

function Group13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p3dcbdf00} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <g id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p27e000} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d="M2.66667 8.66664H13.3333" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p35acc780} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
          <g id="Path_4" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M4 13.3333H12" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p264e7600} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M5.66667 3.99999H13.6667" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.33334 3.99999H3.00001" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.33334 7.99999H3.00001" id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.33334 12H3.00001" id="Path_5" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5.66667 7.99999H13.6667" id="Path_6" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5.66667 12H13.6667" id="Path_7" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p29a55380} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M12.005 7.00287H2.00079" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.00288 2.00079V12.005" id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path clipRule="evenodd" d={svgPaths.p36ed5380} fillRule="evenodd" id="Path_5" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center p-[8px] relative">
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">16 px</p>
          <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g id="Group">
          <path d="M2.00084 13.3389H7.3364" id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.00084 10.6712H6.00251" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.00084 8.00337H7.3364" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.00084 5.33559H6.00251" id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M2.00084 2.66783H7.3364" id="Path_5" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M12.005 13.3389V2.66782" id="Path_6" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p36f3d180} id="Path_7" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1b778b00} id="Path_8" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <g id="Rectangle" />
        </g>
      </svg>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">1.5</p>
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M8 5.33333V10.6667" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10.6667 8H5.33333" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path clipRule="evenodd" d={svgPaths.p231b48c0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Insert</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Layer_2">
          <g id="Path" />
          <path d="M8.66667 7.33333H10.6667" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M9.33333 5.33333H10.6667" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5.33333 9.33333H10.6667" id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5.33333 5.33333H7.33333" id="Path_5" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6.33333 5.33333V7.33333" id="Path_6" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path clipRule="evenodd" d={svgPaths.p35183500} fillRule="evenodd" id="Path_7" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Template</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-start left-[calc(50%-0.5px)] px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Mark Document</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M5.33333 8H10.6667" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p17d61200} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p24de3c00} id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Hyperlink</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 w-[32px]" data-name="Button">
        <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
            <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Plus, Add">
              <Group20 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame126 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 w-[32px]" data-name="Button">
        <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
            <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/messeage-chat-text">
              <Group21 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame127 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Button">
        <div className="bg-[#fafafa] relative rounded-[8px] shrink-0" data-name="_Button base">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
            <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/message-edit-pen">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <path d="M10.6667 9.33334H9.33333" id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path clipRule="evenodd" d={svgPaths.p140fca00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <path clipRule="evenodd" d={svgPaths.p35183500} fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  <g id="Path_4" />
                </g>
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame128 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 w-[32px]" data-name="Button">
        <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
            <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Attachment, Link">
              <Group22 />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame129 />
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-white content-stretch flex h-[32px] items-center relative rounded-[8px] shrink-0" data-name="Toolbar">
        <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Italics">
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Interface, Essential/Italic">
            <Group11 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Bold">
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Interface, Essential/Bold">
            <Group13 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Strikethrough">
          <div className="content-stretch flex items-center relative shrink-0 size-[16px]" data-name="Interface, Essential/Strike">
            <Group14 />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0" data-name="Underline">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Interface, Essential/Underline">
            <Group15 />
          </div>
        </div>
        <div className="bg-[#e8eff4] h-full shrink-0 w-px" />
        <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Bullet Points">
          <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Bullet, List, Text">
            <Group17 />
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="bg-[#e8eff4] h-full shrink-0 w-px" />
        <div className="content-stretch flex h-[32px] items-center p-[8px] relative shrink-0" data-name="Table">
          <div className="relative shrink-0 size-[16px]" data-name="Table, Edit/table-edit.2">
            <Group18 />
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="bg-[#e8eff4] h-full shrink-0 w-px" />
        <Frame133 />
        <div className="bg-[#e8eff4] h-full shrink-0 w-px" />
        <div className="content-stretch flex gap-[4px] h-[32px] items-center p-[8px] relative shrink-0" data-name="Line Height">
          <div className="relative shrink-0 size-[16px]" data-name="Type, Paragraph, Character/line-height">
            <Group19 />
          </div>
          <Frame135 />
        </div>
        <div className="bg-[#e8eff4] h-full shrink-0 w-px" />
        <div className="content-stretch flex h-[32px] items-center p-[8px] relative shrink-0" data-name="Text type">
          <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">H1</p>
          <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Frame132 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <g id="Path" />
          <path d="M9.375 6H2.625" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Interface, Essential/Minus">
        <Group23 />
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.9375 9.9375">
          <g id="Group">
            <path d={svgPaths.p193b9a40} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" />
            <path d={svgPaths.p3bc06a0} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" />
            <path d={svgPaths.p30155390} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" />
            <path d={svgPaths.p1e6dd180} id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9375" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group25 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Interface, Essential/Full Screen, Arrow">
        <Group24 />
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <Frame138 />
          <Frame137 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame130() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Mark Document</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Mark Document</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-start justify-center relative rounded-[8px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] h-[32px] items-start justify-center relative rounded-[8px] shrink-0 w-[48px]" data-name="Button">
        <ButtonBase />
        <Frame130 />
      </div>
      <Frame131 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[2]">
      <Frame134 />
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#a2a7b4] text-[16px] whitespace-nowrap">Type text here...</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] isolate items-start p-[8px] relative size-full">
        <Frame136 />
        <Frame92 />
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.01 24.01">
        <g id="Group">
          <path d="M21.0087 12.005H18.0075" id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.00125 12.005H6.0025" id="Path_2" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12.005 3.00125V6.0025" id="Path_3" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12.005 21.0087V18.0075" id="Path_4" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12d0a60} id="Path_5" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29590480} id="Path_6" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p31793400} id="Path_7" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p118c2b00} id="Path_8" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_9" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p1eda100} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] relative shrink-0" data-name="Note save status">
            <div className="relative shrink-0 size-[24px]" data-name="Note Editor/Property 1=Property 1=Interface, Essential, Property 2=Property 24">
              <Group26 />
            </div>
            <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">Saving Note</p>
          </div>
          <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[132px]" data-name="Button">
            <div className="bg-[#e83a7a] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
                  <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Send File</p>
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential">
                    <Group27 />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e83a7a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full isolate items-start min-h-px min-w-px relative" data-name="Frame">
      <Frame23 />
      <Frame29 />
      <div className="bg-[#f6f9fb] h-[360px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Note Editor">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Frame91 />
          <Frame93 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" />
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#00b2eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[40px]" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[44px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[normal]">Documents</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[22.5px]" data-name="Frame">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[44px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] whitespace-nowrap">
            <p className="leading-[normal]">Drafts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#e7eff5] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[40px] w-full" data-name="Frame">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative size-[39px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Frame">
          <rect fill="var(--fill-0, white)" height="38" rx="7.5" width="38" x="0.5" y="0.5" />
          <rect height="38" rx="7.5" stroke="var(--stroke-0, #E8ECEE)" width="38" x="0.5" y="0.5" />
          <path d="M17 24.5L22 19.5L17 14.5" id="Vector" opacity="0.8" stroke="var(--stroke-0, #454545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-[#bcecd5] content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[15px] relative rounded-[8px] shrink-0 size-[39px]" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0c4c2e] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Frame">
          <rect fill="var(--fill-0, white)" height="38" rx="7.5" width="38" x="0.5" y="0.5" />
          <rect height="38" rx="7.5" stroke="var(--stroke-0, #E8ECEE)" width="38" x="0.5" y="0.5" />
          <path d="M17 24.5L22 19.5L17 14.5" id="Vector" opacity="0.8" stroke="var(--stroke-0, #454545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame103 />
        </div>
      </div>
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white h-full relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e7eff5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] h-full items-center justify-center px-[16px] py-[2px] relative">
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">Approved Drafts</p>
          <div className="h-[5px] relative shrink-0 w-[10px]" data-name="Vector">
            <div className="absolute inset-[-15%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
                <path d={svgPaths.p3d2c9380} id="Vector" opacity="0.8" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Frame102 />
      <div className="flex flex-row items-center self-stretch">
        <Frame106 />
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M8 5.33333V10.6667" id="Path_2" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.6667 8H5.33333" id="Path_3" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p231b48c0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, #E83A7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[135px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[8px] relative w-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Plus, Add">
                <Group28 />
              </div>
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e83a7a] text-[14px] whitespace-nowrap">Create Draft</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e83a7a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame101 />
      <Frame107 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0079 19.0079">
        <g id="Group">
          <g id="Path" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p388c40c0} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
            <g id="Path_3">
              <path d={svgPaths.pbc63480} id="Path_4" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
              <path d={svgPaths.p17c93280} id="Path_5" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
            </g>
            <path d={svgPaths.p154e0370} id="Path_6" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white relative rounded-[7.833px] shrink-0 size-[38px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0.783px] border-solid inset-0 pointer-events-none rounded-[7.833px] shadow-[0px_0.783px_1.567px_0px_rgba(10,13,18,0.05)]" />
      <div className="absolute left-[9px] size-[19px] top-[9px]" data-name="Files/documents-files-copy">
        <Group30 />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="h-[27px] relative shrink-0 w-[171px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 27">
        <g id="Frame">
          <path d={svgPaths.p2f65e780} fill="var(--fill-0, #E8EFF4)" id="Vector" />
          <path d={svgPaths.p2e214a00} fill="var(--fill-0, #E8EFF4)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-[#f9fafd] col-1 h-[63px] ml-[35px] mt-0 relative rounded-[9.399px] row-1 w-[253px]" data-name="Frame">
      <div className="content-stretch flex gap-[18.799px] items-center overflow-clip p-[12.533px] relative rounded-[inherit] size-full">
        <Frame111 />
        <Frame112 />
      </div>
      <div aria-hidden="true" className="absolute border-[8.616px] border-solid border-white inset-[-8.616px] pointer-events-none rounded-[18.015px] shadow-[0px_15.666px_18.799px_-3.133px_rgba(10,13,18,0.08),0px_6.266px_6.266px_-3.133px_rgba(10,13,18,0.03)]" />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0079 19.0079">
        <g id="Group">
          <g id="Path" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p388c40c0} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
            <g id="Path_3">
              <path d={svgPaths.pbc63480} id="Path_4" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
              <path d={svgPaths.p17c93280} id="Path_5" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
            </g>
            <path d={svgPaths.p154e0370} id="Path_6" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17492" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-white relative rounded-[7.833px] shrink-0 size-[38px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0.783px] border-solid inset-0 pointer-events-none rounded-[7.833px] shadow-[0px_0.783px_1.567px_0px_rgba(10,13,18,0.05)]" />
      <div className="absolute left-[9px] size-[19px] top-[9px]" data-name="Files/documents-files-copy">
        <Group31 />
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="h-[27px] relative shrink-0 w-[171px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 27">
        <g id="Frame">
          <path d={svgPaths.p2f65e780} fill="var(--fill-0, #E8EFF4)" id="Vector" />
          <path d={svgPaths.p2e214a00} fill="var(--fill-0, #E8EFF4)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-gradient-to-t col-1 from-[#fdfefe] from-[98.683%] h-[63px] ml-[35px] mt-[120px] relative rounded-[9.399px] row-1 to-[#e5edf3] to-[147.08%] w-[253px]" data-name="Frame">
      <div className="content-stretch flex gap-[18.799px] items-center overflow-clip p-[12.533px] relative rounded-[inherit] size-full">
        <Frame114 />
        <Frame115 />
      </div>
      <div aria-hidden="true" className="absolute border-[8.616px] border-solid border-white inset-[-8.616px] pointer-events-none rounded-[18.015px] shadow-[0px_15.666px_18.799px_-3.133px_rgba(10,13,18,0.08),0px_6.266px_6.266px_-3.133px_rgba(10,13,18,0.03)]" />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.01 24.01">
        <g id="Group">
          <g id="Path" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p16ffd400} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #A2A7B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_3">
              <path d={svgPaths.p30a69d00} id="Path_4" stroke="var(--stroke-0, #A2A7B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p3ebfc200} id="Path_5" stroke="var(--stroke-0, #A2A7B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <path d={svgPaths.p174f0c0} id="Path_6" stroke="var(--stroke-0, #A2A7B4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Files/documents-files-copy">
        <Group32 />
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="h-[9px] relative shrink-0 w-full" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 9">
          <path d={svgPaths.p1ac1aa80} fill="var(--fill-0, #E8EFF4)" id="Vector" />
        </svg>
      </div>
      <div className="h-[9px] relative shrink-0 w-[66px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 9">
          <path d={svgPaths.p2b1b5570} fill="var(--fill-0, #E8EFF4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-gradient-to-t col-1 from-[28.125%] from-white ml-0 mt-[47px] relative rounded-[12px] row-1 to-[#e7eff5] to-[219.38%] w-[323px]" data-name="Frame">
      <div className="content-stretch flex gap-[24px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Frame117 />
        <Frame118 />
      </div>
      <div aria-hidden="true" className="absolute border-11 border-solid border-white inset-[-11px] pointer-events-none rounded-[23px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03)]" />
    </div>
  );
}

function Group29() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Frame110 />
      <Frame113 />
      <Frame116 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-center justify-center leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#232f50] text-[16px]">No Draft to show</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#5c6e93] text-[14px]">Create or clone a draft to list here</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M8 5.33333V10.6667" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.6667 8H5.33333" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p231b48c0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame120 />
      <div className="content-stretch flex items-start relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),0px_20px_26.9px_0px_white] shrink-0 w-[139px]" data-name="Button">
        <div className="bg-[#e83a7a] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Plus, Add">
                <Group33 />
              </div>
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Create Draft</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e83a7a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[33px] items-center left-[69px] top-[calc(50%+17px)] w-[528px]" data-name="Frame">
      <Group29 />
      <Frame119 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[666px] top-[calc(50%+0.5px)]" data-name="Frame">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[732px] top-1/2" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 732 732">
          <path d={svgPaths.p351df80} id="Vector" stroke="url(#paint0_radial_1_4902)" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(366 366) rotate(90) scale(597.91)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4902" r="1">
              <stop stopColor="#E8EFF4" />
              <stop offset="1" stopColor="#E8EFF4" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Frame109 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Frame">
      <div className="overflow-x-auto overflow-y-clip size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <Frame100 />
          <Frame108 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px h-full items-start min-h-px min-w-px relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" data-name="Frame">
      <Frame95 />
      <Frame99 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Frame">
      <div className="content-stretch flex gap-[16px] items-start pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Frame22 />
        <Frame94 />
      </div>
    </div>
  );
}

export default function NoteFileMainPage() {
  return (
    <div className="bg-[#e8eff4] content-stretch flex flex-col isolate items-start relative size-full" data-name="Note File /Main Page">
      <Frame />
      <Frame21 />
    </div>
  );
}