import React from "react";

// Simulated 10-page legal document content
const PAGE_CONTENT: {
  title?: string;
  subtitle?: string;
  sections: { heading?: string; body: string[] }[];
  footer?: string;
}[] = [
  {
    title: "LEGAL NOTICE",
    subtitle: "Case No. 2026-CV-04821 | Filed: January 15, 2026",
    sections: [
      {
        heading: "IN THE SUPERIOR COURT OF THE STATE OF CALIFORNIA",
        body: [
          "FOR THE COUNTY OF LOS ANGELES",
          "",
          "JOHNSON HOLDINGS LLC,",
          "                    Plaintiff,",
          "",
          "        vs.",
          "",
          "PACIFIC RIM DEVELOPMENT CORP.,",
          "MARTIN J. REYNOLDS, individually,",
          "and DOES 1 through 50, inclusive,",
          "                    Defendants.",
        ],
      },
      {
        heading: "NOTICE OF MOTION AND MOTION FOR SUMMARY JUDGMENT",
        body: [
          "TO ALL PARTIES AND THEIR ATTORNEYS OF RECORD:",
          "",
          "PLEASE TAKE NOTICE that on March 15, 2026, at 9:00 a.m., or as soon thereafter as the matter may be heard, in Department 12 of the above-entitled Court, located at 111 North Hill Street, Los Angeles, California 90012, Plaintiff JOHNSON HOLDINGS LLC ('Plaintiff') will and hereby does move for an order granting summary judgment in favor of Plaintiff and against Defendants.",
        ],
      },
    ],
    footer: "Page 1 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        heading: "I. STATEMENT OF UNDISPUTED MATERIAL FACTS",
        body: [
          "1. On or about June 12, 2024, Plaintiff and Defendant Pacific Rim Development Corp. ('Pacific Rim') entered into a written Purchase and Sale Agreement ('PSA') for the commercial property located at 4500 Wilshire Boulevard, Los Angeles, CA 90010 ('the Property'). (Exhibit A, Declaration of Sarah Chen, Para. 3.)",
          "",
          "2. The PSA provided for a total purchase price of $12,500,000.00 (Twelve Million Five Hundred Thousand Dollars), with a deposit of $1,250,000.00 to be held in escrow by First American Title Insurance Company. (Exhibit A, Section 2.1.)",
          "",
          "3. Pursuant to Section 4.2 of the PSA, Defendant Pacific Rim was obligated to obtain all necessary governmental approvals, including but not limited to zoning variances and environmental clearances, within 120 days of the Effective Date. (Exhibit A, Section 4.2.)",
          "",
          "4. On October 15, 2024, Defendant Pacific Rim submitted its application for a zoning variance to the Los Angeles Department of City Planning. Said application was incomplete and was returned to Defendant on October 28, 2024. (Exhibit B, Declaration of James Morrison, Para. 5-6.)",
        ],
      },
    ],
    footer: "Page 2 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        body: [
          "5. Despite receiving written notice of the deficiencies in the application, Defendant Pacific Rim failed to resubmit a corrected application until January 3, 2025, approximately 45 days after the contractual deadline had expired. (Exhibit B, Para. 7-8.)",
          "",
          "6. On February 10, 2025, the Department of City Planning denied the zoning variance application on the grounds that the proposed development was inconsistent with the applicable Community Plan. (Exhibit C.)",
          "",
          "7. Defendant Martin J. Reynolds ('Reynolds'), acting in his capacity as Chief Executive Officer and majority shareholder of Pacific Rim, personally guaranteed performance under the PSA pursuant to the Personal Guarantee Agreement dated June 12, 2024. (Exhibit D.)",
          "",
          "8. On March 1, 2025, Plaintiff provided written notice of default to both Pacific Rim and Reynolds, demanding cure within the 30-day period specified in Section 8.1 of the PSA. (Exhibit E.)",
        ],
      },
      {
        heading: "II. ARGUMENT",
        body: [
          "A. Standard for Summary Judgment",
          "",
          "Under California Code of Civil Procedure Section 437c, a motion for summary judgment shall be granted 'if all the papers submitted show that there is no triable issue as to any material fact and that the moving party is entitled to a judgment as a matter of law.' (Code Civ. Proc., Section 437c, subd. (c).)",
        ],
      },
    ],
    footer: "Page 3 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        body: [
          "The moving party bears the initial burden of making a prima facie showing that there are no triable issues of material fact. (Aguilar v. Atlantic Richfield Co. (2001) 25 Cal.4th 826, 843.) Once the moving party has met this burden, the burden shifts to the opposing party to show that a triable issue of material fact exists. (Id. at 849.)",
          "",
          "As set forth below, Plaintiff has met its burden of establishing that no triable issues of material fact exist with respect to any of the causes of action alleged in the Complaint.",
        ],
      },
      {
        heading: "B. Pacific Rim Breached the PSA",
        body: [
          "To establish a claim for breach of contract under California law, a plaintiff must prove: (1) the existence of the contract; (2) plaintiff's performance or excuse for nonperformance; (3) defendant's breach; and (4) resulting damages. (Oasis West Realty, LLC v. Goldman (2011) 51 Cal.4th 811, 821.)",
          "",
          "Here, the undisputed facts establish each element as a matter of law:",
          "",
          "First, the existence of a valid and enforceable contract is undisputed. The PSA was executed by authorized representatives of both parties on June 12, 2024, and was supported by adequate consideration, including Plaintiff's deposit of $1,250,000.00. (UMF Nos. 1-2.)",
          "",
          "Second, Plaintiff fully performed all of its obligations under the PSA, including timely deposit of funds into escrow, cooperation with due diligence, and provision of all requested documentation. (Declaration of Sarah Chen, Para. 8-12.)",
        ],
      },
    ],
    footer: "Page 4 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        body: [
          "Third, Pacific Rim's breach is clear and undisputed. The PSA required Pacific Rim to obtain all necessary governmental approvals within 120 days of the Effective Date (i.e., by October 10, 2024). Pacific Rim failed to even submit a complete application until January 3, 2025 -- nearly three months after the deadline. (UMF Nos. 3-5.)",
          "",
          "Fourth, Plaintiff has suffered damages as a direct and proximate result of Pacific Rim's breach, including but not limited to: (a) the loss of the $1,250,000.00 deposit, which remains in escrow pending resolution of this action; (b) consequential damages in excess of $3,000,000.00 resulting from Plaintiff's inability to proceed with its planned redevelopment project; and (c) attorney fees and costs incurred in this litigation. (Declaration of Sarah Chen, Para. 15-18.)",
        ],
      },
      {
        heading: "C. Reynolds Is Liable Under the Personal Guarantee",
        body: [
          "A guaranty is an obligation that arises when one party agrees to answer for the debt, default, or miscarriage of another. (Civ. Code, Section 2787.) The Personal Guarantee Agreement executed by Reynolds on June 12, 2024, expressly provides that Reynolds 'unconditionally and irrevocably guarantees the full and complete performance of all obligations' of Pacific Rim under the PSA. (Exhibit D, Section 1.)",
          "",
          "The guarantee further provides that Reynolds' obligations are 'primary and not secondary' and that Plaintiff 'shall not be required to proceed first against [Pacific Rim] before enforcing this Guarantee.' (Exhibit D, Section 3.)",
        ],
      },
    ],
    footer: "Page 5 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        body: [
          "Reynolds' attempt to avoid liability under the guarantee is without merit. In his Answer, Reynolds asserts that the guarantee was procured through fraud or misrepresentation, but he has produced no evidence whatsoever to support this defense. When pressed during deposition, Reynolds admitted that he reviewed the guarantee with his own attorney prior to execution and that no representations were made to him regarding the terms of the guarantee that were inconsistent with its written terms. (Reynolds Deposition, pp. 112:15-114:3, attached as Exhibit F.)",
        ],
      },
      {
        heading: "III. DAMAGES ANALYSIS",
        body: [
          "Plaintiff's damages are calculated as follows:",
          "",
          "  1. Earnest Money Deposit:            $1,250,000.00",
          "  2. Due Diligence Costs:                 $347,500.00",
          "  3. Lost Development Profits:          $3,125,000.00",
          "  4. Carrying Costs (financing):          $892,000.00",
          "  5. Professional Fees:                   $215,000.00",
          "  6. Administrative Expenses:              $73,500.00",
          "  ----------------------------------------",
          "  TOTAL DAMAGES:                       $5,903,000.00",
          "",
          "Each category of damages is supported by documentary evidence and expert testimony, as detailed in the Declaration of Financial Expert Dr. Robert Kim. (Exhibit G.)",
        ],
      },
    ],
    footer: "Page 6 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        heading: "IV. DEFENDANTS CANNOT RAISE A TRIABLE ISSUE OF FACT",
        body: [
          "Defendants' likely defenses are insufficient to raise a triable issue of material fact for the following reasons:",
          "",
          "A. The Force Majeure Defense Fails",
          "",
          "Defendants may argue that the COVID-19 pandemic and its aftereffects constitute a force majeure event excusing performance. This argument fails for several reasons. First, the PSA was executed in June 2024, well after the primary effects of the pandemic had subsided. Second, the force majeure clause in Section 9.1 of the PSA expressly excludes 'delays caused by government agency processing times or the failure to submit complete applications.' (Exhibit A, Section 9.1.) Third, the evidence demonstrates that Pacific Rim's failure to meet the deadline was caused not by any external event but by its own internal mismanagement and lack of diligence. (Morrison Decl., Para. 10-12.)",
          "",
          "B. The Waiver Defense Fails",
          "",
          "Defendants may argue that Plaintiff waived the deadline by not immediately declaring a default. However, Section 10.3 of the PSA provides that '[n]o waiver of any provision of this Agreement shall be effective unless in writing and signed by the waiving party.' Plaintiff never executed any written waiver of the governmental approval deadline. Moreover, Plaintiff's March 1, 2025 default notice expressly reserved all rights under the PSA. (Exhibit E.)",
        ],
      },
    ],
    footer: "Page 7 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        body: [
          "C. The Mitigation Defense Fails",
          "",
          "To the extent Defendants argue that Plaintiff failed to mitigate its damages, this defense is equally unavailing. Plaintiff took reasonable steps to mitigate by exploring alternative development sites and negotiating with other potential buyers for the Property. (Chen Decl., Para. 20-23.) However, the unique characteristics of the Property -- including its location, zoning designation, and proximity to public transit -- made it particularly suited to Plaintiff's planned mixed-use development project, and no comparable alternative was available within a reasonable timeframe. (Id., Para. 24-25.)",
        ],
      },
      {
        heading: "V. PRAYER FOR RELIEF",
        body: [
          "WHEREFORE, Plaintiff respectfully requests that this Court enter an order:",
          "",
          "1. Granting Plaintiff's Motion for Summary Judgment;",
          "",
          "2. Entering judgment in favor of Plaintiff and against Defendants, jointly and severally, in the amount of $5,903,000.00, plus prejudgment interest at the legal rate from March 31, 2025;",
          "",
          "3. Awarding Plaintiff its reasonable attorney fees and costs of suit pursuant to Section 11.2 of the PSA;",
          "",
          "4. Awarding Plaintiff such other and further relief as the Court deems just and proper.",
        ],
      },
    ],
    footer: "Page 8 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        heading: "MEMORANDUM OF POINTS AND AUTHORITIES",
        body: [
          "SUPPORTING AUTHORITIES:",
          "",
          "1. Aguilar v. Atlantic Richfield Co. (2001) 25 Cal.4th 826",
          "   - Standard for summary judgment; burden-shifting framework",
          "",
          "2. Oasis West Realty, LLC v. Goldman (2011) 51 Cal.4th 811",
          "   - Elements of breach of contract claim",
          "",
          "3. Hicks v. E.T. Legg & Associates (2001) 89 Cal.App.4th 496",
          "   - Enforceability of personal guarantees",
          "",
          "4. Pacific Hills Homeowners Assn. v. Prun (2008) 160 Cal.App.4th 1557",
          "   - Anti-waiver provisions in commercial contracts",
          "",
          "5. Valle de Oro Bank v. Gamboa (1994) 26 Cal.App.4th 1686",
          "   - Guarantor's obligation as primary obligor",
          "",
          "6. Hewlett-Packard Co. v. Oracle Corp. (2021) 65 Cal.App.5th 418",
          "   - Calculation and proof of consequential damages",
          "",
          "7. Cal. Code of Civil Procedure Section 437c",
          "   - Summary judgment statute and requirements",
          "",
          "8. Cal. Civil Code Sections 2787-2855",
          "   - Suretyship and guaranty obligations",
        ],
      },
    ],
    footer: "Page 9 of 10 | Confidential - Attorney Work Product",
  },
  {
    sections: [
      {
        heading: "DECLARATION OF SERVICE",
        body: [
          "I, Maria L. Thompson, declare as follows:",
          "",
          "I am employed in the County of Los Angeles, State of California. I am over the age of eighteen (18) years and not a party to the within action. My business address is 2100 Century Park East, Suite 1500, Los Angeles, California 90067.",
          "",
          "On January 15, 2026, I served the foregoing NOTICE OF MOTION AND MOTION FOR SUMMARY JUDGMENT; MEMORANDUM OF POINTS AND AUTHORITIES; DECLARATIONS OF SARAH CHEN, JAMES MORRISON, AND DR. ROBERT KIM; and EXHIBITS A through G on the following parties by the method indicated below:",
          "",
          "  BY ELECTRONIC SERVICE: Pursuant to California Rules of Court,",
          "  Rule 2.251, I caused the document(s) to be transmitted",
          "  electronically to the email addresses listed below:",
          "",
          "  David P. Richardson, Esq.",
          "  RICHARDSON & ASSOCIATES LLP",
          "  555 South Flower Street, 40th Floor",
          "  Los Angeles, CA 90071",
          "  drichardson@richardsonlaw.com",
          "  Attorneys for Defendant Pacific Rim Development Corp.",
          "",
          "  Michael K. Tanaka, Esq.",
          "  LAW OFFICES OF MICHAEL K. TANAKA",
          "  1900 Avenue of the Stars, Suite 2800",
          "  Los Angeles, CA 90067",
          "  mtanaka@tanakalaw.com",
          "  Attorney for Defendant Martin J. Reynolds",
          "",
          "I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.",
          "",
          "Executed on January 15, 2026, at Los Angeles, California.",
          "",
          "",
          "                    _____________________________",
          "                    Maria L. Thompson",
        ],
      },
    ],
    footer: "Page 10 of 10 | Confidential - Attorney Work Product",
  },
];

interface DocumentPageProps {
  pageNumber: number;
}

export function DocumentPage({ pageNumber }: DocumentPageProps) {
  const pageIndex = pageNumber - 1;
  const page =
    PAGE_CONTENT[pageIndex] || PAGE_CONTENT[PAGE_CONTENT.length - 1];

  return (
    <div
      className="bg-white select-none"
      style={{
        width: 612,
        minHeight: 792,
        padding: "60px 72px",
        fontFamily: "'Times New Roman', 'Georgia', serif",
        fontSize: 11.5,
        lineHeight: 1.6,
        color: "#1a1a1a",
        position: "relative",
      }}
    >
      {/* Page title (first page only) */}
      {page.title && (
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            {page.title}
          </h1>
          {page.subtitle && (
            <p style={{ fontSize: 10, color: "#555", fontStyle: "italic" }}>
              {page.subtitle}
            </p>
          )}
        </div>
      )}

      {/* Sections */}
      {page.sections.map((section, sIdx) => (
        <div key={sIdx} style={{ marginBottom: 16 }}>
          {section.heading && (
            <h2
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                marginBottom: 8,
                textTransform: "uppercase" as const,
                letterSpacing: 0.5,
              }}
            >
              {section.heading}
            </h2>
          )}
          {section.body.map((line, lIdx) => (
            <p
              key={lIdx}
              style={{
                marginBottom: line === "" ? 8 : 0,
                whiteSpace: "pre-wrap",
                textAlign: line.startsWith("  ") ? ("left" as const) : ("justify" as const),
              }}
            >
              {line || "\u00A0"}
            </p>
          ))}
        </div>
      ))}

      {/* Footer */}
      {page.footer && (
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 72,
            right: 72,
            borderTop: "1px solid #ccc",
            paddingTop: 8,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 9,
            color: "#888",
          }}
        >
          <span>{page.footer}</span>
          <span>Johnson Holdings LLC v. Pacific Rim Development Corp.</span>
        </div>
      )}
    </div>
  );
}

export const TOTAL_PDF_PAGES = PAGE_CONTENT.length;
