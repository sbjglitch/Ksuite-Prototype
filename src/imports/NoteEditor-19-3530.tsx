import svgPaths from "./svg-le0esd1pia";

export default function NoteEditor() {
  return (
    <button className="bg-[#f6f9fb] cursor-pointer relative rounded-[12px] size-full" data-name="Note Editor">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Note Editor">
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
          <div className="content-stretch flex flex-col gap-[8px] isolate items-start p-[8px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[1]" data-name="Note Container">
              <div className="content-stretch flex items-center justify-center pl-[8px] relative shrink-0" data-name="Icon Container">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon Group">
                  <div className="relative shrink-0 size-[24px]" data-name="Interface, Essential/Plus, Add">
                    <div className="absolute contents inset-0" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Group">
                          <path d={svgPaths.p19f7d200} fill="var(--fill-0, #CCF0FB)" id="Path" stroke="var(--stroke-0, #E5F7FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          <g id="Path_2" />
                          <path d="M12 8V16" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M16 12H8" id="Path_4" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Note Status">
                    <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential">
                      <div className="absolute contents inset-0" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="Group">
                            <g id="Path" />
                            <path clipRule="evenodd" d={svgPaths.p231b48c0} fill="var(--fill-0, #1EBE72)" fillRule="evenodd" id="Path_2" />
                            <path d={svgPaths.p2164f200} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#5c6e93] text-[16px] text-left whitespace-nowrap">Note Saved</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-[132px]" data-name="Button">
                <div className="bg-[#e83a7a] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="_Button base">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
                      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Send File</p>
                      <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential">
                        <div className="absolute inset-[-0.02%]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0067 16.0067">
                            <g id="Group">
                              <g id="Path" />
                              <path d={svgPaths.p1eda100} fill="var(--fill-0, white)" id="Subtract" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e83a7a] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" />
    </button>
  );
}