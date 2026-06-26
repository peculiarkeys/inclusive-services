import svgPaths from "./svg-x0p7qv0lit";
import imgHeroSection from "figma:asset/9c7f9a850dcb52e471bb613bc76969646fffe4b5.png";
import imgSolutionImage from "figma:asset/0bad60086fd0cffb0ef4c852d12369ae8fe7f68f.png";
import imgServiceImage from "figma:asset/e261f5edb57bd9da5e9eb38b7981e488e673b668.png";
import imgServiceImage1 from "figma:asset/77e58ea2c2f619eb26edaff82a496ecdff23d5c4.png";
import imgServiceImage2 from "figma:asset/efe577f30b84d232b81b3e76c6c2491093e3462f.png";
import imgProjectImage from "figma:asset/b69010b45ae5b9784e78a8dc7f38d76f567e6452.png";
import imgProjectImage1 from "figma:asset/c3948ffc2fc3efc9b9d9be06ad8cc2d1a2da3725.png";
import imgProjectImage2 from "figma:asset/d704be682a54280c1f70015885cde05a122608ab.png";
import imgProjectImage3 from "figma:asset/55f0d05da41079f7cd88dadc119a7a41d75cafcb.png";
import imgProjectImage4 from "figma:asset/af9e3469488188cf525954d2b5a912c03d7c1009.png";
import imgProjectImage5 from "figma:asset/7e2a0570d98a36052c1f6389a981c2c46738c5f6.png";
import imgAuthorImage from "figma:asset/426ceceee471dcde99c5f76748c5a11bcd589d18.png";
import imgAuthorImage1 from "figma:asset/be1c1b31637a5d0322c87142f2db54c10b428bb0.png";
import imgAuthorImage2 from "figma:asset/5784ceece83b4230d23d1dea73acda304f625fd3.png";
import imgBlogImage from "figma:asset/b1dd56bf93297241ecbe1ce7f4cdee94dda33dfe.png";
import imgBlogImage1 from "figma:asset/4cce5f2fa65edff10acd585416da13637ad1c8ee.png";
import imgBlogImage2 from "figma:asset/5cd454dcd29672793acab0b17acf5536cc771160.png";
import imgFooterDesktop from "figma:asset/ff625af9cc74a348dac7d0b1e6a8cc355a34a1de.png";
import { imgBottom, imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4, imgGroup5, imgGroup6, imgGroup7, imgGroup8, imgGroup9, imgGroup10 } from "./svg-9gt1q";

function Svg() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[16.67%_16.67%_41.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 9">
            <path d="M0.75 8.25L4.5 4.5L0.75 0.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_16.67%_16.67%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9.75">
            <path d={svgPaths.p1b397700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-px size-[18px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[18px]">Get This Template</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container2 />
    </div>
  );
}

function LinkRemoveButton() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Link - Remove Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px] shadow-[0px_0.602px_0.422px_-1px_rgba(0,0,0,0.12),0px_2.289px_1.602px_-2px_rgba(0,0,0,0.11),0px_10px_7px_-3px_rgba(0,0,0,0.08)]" data-name="Link - Remove Button:shadow" />
          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <Icon />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function RemoveThisBuyButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Remove This Buy Button">
      <LinkRemoveButton />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p366a3f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_12.5%_62.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.75px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.5">
            <path d="M0.75 0.75H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_12.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 10.5">
            <path d="M0.75 9.75V0.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-px size-[18px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Unlock 200+ Templates</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function LinkRemoveButton1() {
  return (
    <div className="bg-[#3b48ff] relative rounded-[10px] shrink-0 w-full" data-name="Link - Remove Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px] shadow-[0px_0.602px_0.422px_-1px_rgba(0,0,0,0.12),0px_2.289px_1.602px_-2px_rgba(0,0,0,0.11),0px_10px_7px_-3px_rgba(0,0,0,0.08)]" data-name="Link - Remove Button:shadow" />
          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <Icon1 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkRemoveButton1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 9">
            <path d={svgPaths.p2d832f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-20%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5003 5.25016">
            <path d={svgPaths.p4534900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-20%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5003 5.25016">
            <path d={svgPaths.p4534900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-px size-[18px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Access 4200+ Components</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container10 />
    </div>
  );
}

function LinkRemoveButton2() {
  return (
    <div className="bg-[#141414] relative rounded-[10px] shrink-0 w-full" data-name="Link - Remove Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[14px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[10px] shadow-[0px_0.602px_0.422px_-1px_rgba(0,0,0,0.12),0px_2.289px_1.602px_-2px_rgba(0,0,0,0.11),0px_10px_7px_-3px_rgba(0,0,0,0.08)]" data-name="Link - Remove Button:shadow" />
          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <Icon2 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <LinkRemoveButton2 />
    </div>
  );
}

function RemoveThisBuyPromo1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.06)] content-stretch flex flex-col gap-[8px] items-center justify-center p-[10px] relative rounded-[16px] shrink-0 w-[280px]" data-name="Remove This Buy Promo">
      <RemoveThisBuyButton />
      <Container3 />
      <Container7 />
    </div>
  );
}

function RemoveThisBuyPromo() {
  return (
    <div className="absolute bottom-[8458.39px] content-stretch flex flex-col items-start right-[9px]" data-name="Remove This Buy Promo">
      <RemoveThisBuyPromo1 />
    </div>
  );
}

function Backdrop() {
  return <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />;
}

function Image() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
        <g id="image">
          <path d={svgPaths.p5ca1b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center overflow-clip relative shrink-0 w-[12px]" data-name="image fill">
      <Image />
    </div>
  );
}

function LogoMask() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[12px]" data-name="Logo:mask">
      <ImageFill />
    </div>
  );
}

function LogoMaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-1/2 top-[-2px] w-[12px]" data-name="Logo:mask-group">
      <LogoMask />
      <div className="-translate-x-1/2 absolute bg-black h-[20px] left-1/2 top-0 w-[12px]" data-name="Logo" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Container">
      <LogoMaskGroup />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 10">
        <g clipPath="url(#clip0_1_961)" id="image">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_961">
            <rect fill="white" height="10" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-center justify-center overflow-clip relative shrink-0 w-[97px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function TextMask() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[97px]" data-name="Text:mask">
      <ImageFill1 />
    </div>
  );
}

function TextMaskGroup() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Text:mask-group">
      <TextMask />
      <div className="-translate-y-1/2 absolute bg-black h-[10px] left-0 top-1/2 w-[97px]" data-name="Text" />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex gap-[10px] inset-[28.95%_7.5%] items-center" data-name="Content">
      <Container12 />
      <TextMaskGroup />
    </div>
  );
}

function LinkLight() {
  return (
    <div className="h-[38px] relative shrink-0 w-[140px]" data-name="Link - Light">
      <Backdrop />
      <Content />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] opacity-6 rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-4 rounded-[11px]" data-name="Border">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[8403.39px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[30.4px]">Call us to get a free estimate:</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] text-center tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">+1-800-555-8493</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-center min-h-px min-w-px relative" data-name="Text+Icon">
      <Container13 />
      <Container15 />
    </div>
  );
}

function SectionDesktop() {
  return (
    <div className="absolute bg-[#ffb703] content-stretch flex items-center justify-center left-0 overflow-clip pb-[6px] pt-[5px] px-[30px] right-0 top-0" data-name="Section - Desktop">
      <TextIcon />
    </div>
  );
}

function SectionGradientOverlay() {
  return <div className="absolute inset-0" data-name="Section - Gradient Overlay" style={{ backgroundImage: "linear-gradient(251.996deg, rgba(0, 0, 0, 0) 37%, rgb(0, 0, 0) 100%)" }} />;
}

function BestRoofingServiceInTexasHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Best Roofing Service in Texas → Heading 1">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[92.4px] not-italic relative shrink-0 text-[88px] text-white tracking-[-2.3px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Best Roofing `}</p>
        <p>Service in Texas</p>
      </div>
    </div>
  );
}

function ProtectYourHomeWithTheHighestQualityRoofingServicesFromInstallationToRepairsWeveGotYouCoveredGetAFreeQuoteToday() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Protect your home with the highest quality roofing services. From installation to repairs, we’ve got you covered. Get a free quote today!">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[18px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Protect your home with the highest quality roofing services. From installation to `}</p>
        <p>repairs, we’ve got you covered. Get a free quote today!</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16.01px] items-start max-w-[678px] relative shrink-0 w-[678px]" data-name="Section Title">
      <BestRoofingServiceInTexasHeading />
      <ProtectYourHomeWithTheHighestQualityRoofingServicesFromInstallationToRepairsWeveGotYouCoveredGetAFreeQuoteToday />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[#160c00] text-[28px] tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Act Now for Fast & Reliable `}</p>
        <p>Roofing Services!</p>
      </div>
    </div>
  );
}

function DiscoverTheLegacyOfExceptionalGolfingAndTheVibrantCommunityThatMakesOurClubASecondHomeForEnthusiasts() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-[30px] top-[calc(50%-0.4px)]" data-name="Discover the legacy of exceptional golfing and the vibrant community that makes our club a second home for enthusiasts.">
      <Heading3 />
    </div>
  );
}

function Title() {
  return (
    <div className="h-[72.81px] overflow-clip relative shrink-0 w-full" data-name="Title">
      <DiscoverTheLegacyOfExceptionalGolfingAndTheVibrantCommunityThatMakesOurClubASecondHomeForEnthusiasts />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">Required Service</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[30.41px] min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#190d00] text-[16px] top-[14.5px] w-[116.61px]">
        <p className="leading-[30.4px] whitespace-pre-wrap">Roof Installation</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Ptuv9MYp7NnEfGuvnwxarUobNeaSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="PTUV9MYp7NnEfGUVNWXARUobNEA.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1072)" id="PTUV9MYp7NnEfGUVNWXARUobNEA.svg">
          <path clipRule="evenodd" d={svgPaths.p151eb500} fill="var(--fill-0, #160C00)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1072">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Ptuv9MYp7NnEfGuvnwxarUobNeaSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[62.41px] items-start justify-center overflow-clip pl-[10px] pr-[16px] py-[23.205px] relative shrink-0 w-[42px]" data-name="PTUV9MYp7NnEfGUVNWXARUobNEA.svg fill">
      <Ptuv9MYp7NnEfGuvnwxarUobNeaSvg />
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start right-0 top-0 w-[42px]" data-name="Mask">
      <Ptuv9MYp7NnEfGuvnwxarUobNeaSvgFill />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[42px]" data-name="Mask Group">
      <Mask />
      <div className="absolute bg-[#999] bottom-0 right-0 top-0 w-[42px]" data-name="Background" />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f1f1f1] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[16px] relative w-full">
          <Options />
          <MaskGroup />
          <div className="absolute inset-0 rounded-[8px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label">
      <Container18 />
      <Background />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">Phone Number</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[16px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">xxx-xxx-xxxx</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[21.39px] pt-[20px] px-[16px] relative w-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <Input />
      <div className="absolute inset-0 rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label">
      <Container21 />
      <Background1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Request a Consultation</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container25 />
    </div>
  );
}

function WocRIgBdfJpKPs4OTegYn3Yu0TwSvg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="wocRIgBDFJpKPs4oTegYN3YU0tw.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="wocRIgBDFJpKPs4oTegYN3YU0tw.svg">
          <path d={svgPaths.p33084d40} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WocRIgBdfJpKPs4OTegYn3Yu0TwSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="wocRIgBDFJpKPs4oTegYN3YU0tw.svg fill">
      <WocRIgBdfJpKPs4OTegYn3Yu0TwSvg />
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Button Icon">
      <WocRIgBdfJpKPs4OTegYn3Yu0TwSvgFill />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[4px]" data-name="Container">
      <ButtonIcon />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="min-h-[32px] min-w-[32px] relative rounded-[6px] shrink-0 size-[32px]" data-name="Arrow Icon">
      <Container26 />
    </div>
  );
}

function ButtonDefault() {
  return (
    <div className="bg-[#fb8500] content-stretch flex gap-[8px] items-center justify-center pb-[10px] pt-[11px] px-[16px] relative rounded-[8px] shrink-0" data-name="Button - Default">
      <Container24 />
      <div className="absolute inset-[1px_0_0_0] rounded-[8px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#fb8500] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <ArrowIcon />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_4px_0px_rgba(228,163,0,0.4),inset_0px_7px_16px_0px_rgba(255,206,88,0.6)]" />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[13px] items-start max-w-[512px] overflow-clip p-[32px] relative rounded-[16px] shrink-0 w-[512px]" data-name="Form">
      <Title />
      <Label />
      <Label1 />
      <ButtonDefault />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Form />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 min-w-[1440px] overflow-clip pb-[86px] pt-[69.205px] px-[60px] right-0 top-[142.81px]" data-name="Hero Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[110.35%] left-0 max-w-none top-[-5.18%] w-full" src={imgHeroSection} />
      </div>
      <SectionGradientOverlay />
      <Container17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[20px] tracking-[-0.4px] w-full">
        <p className="leading-[34px] whitespace-pre-wrap">Inspiring companies build inspiring websites and prismic</p>
      </div>
    </div>
  );
}

function InspiringCompaniesBuildInspiringWebsitesAndPrismic() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1320px]" data-name="Inspiring companies build inspiring websites and prismic">
      <Container28 />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section Title">
      <InspiringCompaniesBuildInspiringWebsitesAndPrismic />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.08%_70.66%_3.37%_0.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[29.936px_29.935px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9355 29.9355">
        <g id="Group">
          <path d={svgPaths.p20909a80} fill="var(--fill-0, #303447)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[3.08%_70.66%_3.37%_0.04%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Xq8WwxBjV22Q7TXs6WsE7MFcUGcSvg() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[102.194px]" data-name="XQ8wwxBjV22q7TXs6WsE7MFcUGc.svg">
      <div className="absolute inset-[19.13%_0.65%_1.11%_32.49%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.3275 25.5236">
          <path d={svgPaths.p18708500} fill="var(--fill-0, #303447)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
    </div>
  );
}

function Xq8WwxBjV22Q7TXs6WsE7MFcUGcSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-center overflow-clip px-[24.903px] relative shrink-0 w-[152px]" data-name="XQ8wwxBjV22q7TXs6WsE7MFcUGc.svg fill">
      <Xq8WwxBjV22Q7TXs6WsE7MFcUGcSvg />
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Brand Logo">
      <Xq8WwxBjV22Q7TXs6WsE7MFcUGcSvgFill />
    </div>
  );
}

function BrandLogo1Opacity() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-[152px]" data-name="Brand Logo 1 → Opacity 1">
      <BrandLogo />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2.87%_73.21%_1.2%_0.66%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.045px] mask-size-[25px_23.913px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23.9822">
        <g id="Group">
          <path d={svgPaths.p30693380} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[3.05%_73.21%_1.3%_0.66%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function ZucyGlgoLt3Ap2VdcrKRqVBaESvg() {
  return (
    <div className="h-[25px] overflow-clip relative shrink-0 w-[95.652px]" data-name="ZucyGlgoLt3Ap2VdcrKRqVBaE.svg">
      <div className="absolute inset-[3.05%_0.21%_17.65%_35.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.6609 19.8261">
          <path d={svgPaths.pe41b000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup1 />
    </div>
  );
}

function ZucyGlgoLt3Ap2VdcrKRqVBaESvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-center justify-center overflow-clip px-[11.174px] relative shrink-0 w-[118px]" data-name="ZucyGlgoLt3Ap2VdcrKRqVBaE.svg fill">
      <ZucyGlgoLt3Ap2VdcrKRqVBaESvg />
    </div>
  );
}

function Opacity1BrandLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Opacity 1 → Brand Logo">
      <ZucyGlgoLt3Ap2VdcrKRqVBaESvgFill />
    </div>
  );
}

function BrandLogo1() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start justify-center relative shrink-0 w-[118px]" data-name="Brand Logo 1">
      <Opacity1BrandLogo />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[3.92%_82.78%_11.96%_0.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.001px] mask-size-[23.22px_23.22px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.246 23.2538">
        <g id="Group">
          <path d={svgPaths.p5be6980} fill="var(--fill-0, #001524)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[3.92%_82.8%_12.08%_0.13%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Jfsby3CSvAlAkLyUBexf98VDKvUSvg() {
  return (
    <div className="h-[27.642px] overflow-clip relative shrink-0 w-[136px]" data-name="jfsby3cSVAlAkLyUBexf98vDKvU.svg">
      <div className="absolute inset-[16.59%_0.62%_2.77%_21.27%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.228 22.2907">
          <path d={svgPaths.p15159b00} fill="var(--fill-0, #001524)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup2 />
    </div>
  );
}

function Jfsby3CSvAlAkLyUBexf98VDKvUSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-center justify-center overflow-clip py-[0.679px] relative shrink-0 w-[136px]" data-name="jfsby3cSVAlAkLyUBexf98vDKvU.svg fill">
      <Jfsby3CSvAlAkLyUBexf98VDKvUSvg />
    </div>
  );
}

function Opacity1BrandLogo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Opacity 1 → Brand Logo">
      <Jfsby3CSvAlAkLyUBexf98VDKvUSvgFill />
    </div>
  );
}

function BrandLogo2() {
  return (
    <div className="content-stretch flex flex-col h-[29px] items-start justify-center relative shrink-0 w-[136px]" data-name="Brand Logo 1">
      <Opacity1BrandLogo1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[2.6%_42.87%_1.11%_37.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[25.405px_25.405px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4046 25.4046">
        <g id="Group">
          <path d={svgPaths.p3bf75900} fill="var(--fill-0, #020203)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[2.6%_42.87%_1.11%_37.28%]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function D0D4OnY0IEbo6B0IhsyEh3Q6MSvg() {
  return (
    <div className="h-[26.382px] overflow-clip relative shrink-0 w-[128px]" data-name="d0d4onY0iEbo6B0IhsyEH3q6M.svg">
      <div className="absolute inset-[12.67%_0.46%_22.44%_0]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.41 17.1188">
          <path d={svgPaths.p2154b700} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup3 />
    </div>
  );
}

function D0D4OnY0IEbo6B0IhsyEh3Q6MSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-center justify-center overflow-clip py-[0.309px] relative shrink-0 w-[128px]" data-name="d0d4onY0iEbo6B0IhsyEH3q6M.svg fill">
      <D0D4OnY0IEbo6B0IhsyEh3Q6MSvg />
    </div>
  );
}

function Opacity1BrandLogo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Opacity 1 → Brand Logo">
      <D0D4OnY0IEbo6B0IhsyEh3Q6MSvgFill />
    </div>
  );
}

function BrandLogo3() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start justify-center relative shrink-0 w-[128px]" data-name="Brand Logo 1">
      <Opacity1BrandLogo2 />
    </div>
  );
}

function M4TV45LRjvUIf0Z18FxwA50BmSvg() {
  return (
    <div className="h-[19.152px] relative shrink-0 w-[126px]" data-name="m4tV45lRjvUIf0z18FxwA50BM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 19.152">
        <g clipPath="url(#clip0_1_1055)" id="m4tV45lRjvUIf0z18FxwA50BM.svg">
          <path d={svgPaths.p1d2e8fb0} fill="var(--fill-0, #101814)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1055">
            <rect fill="white" height="19.152" width="126" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function M4TV45LRjvUIf0Z18FxwA50BmSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-center justify-center overflow-clip py-[3.924px] relative shrink-0 w-[126px]" data-name="m4tV45lRjvUIf0z18FxwA50BM.svg fill">
      <M4TV45LRjvUIf0Z18FxwA50BmSvg />
    </div>
  );
}

function Opacity1M4TV45LRjvUIf0Z18FxwA50BmSvg() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Opacity 1 → m4tV45lRjvUIf0z18FxwA50BM.svg">
      <M4TV45LRjvUIf0Z18FxwA50BmSvgFill />
    </div>
  );
}

function BrandLogo4() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start justify-center relative shrink-0 w-[126px]" data-name="Brand Logo 1">
      <Opacity1M4TV45LRjvUIf0Z18FxwA50BmSvg />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[1.76%_81.93%_3%_0.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.001px_0px] mask-size-[22.105px_22.105px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1053 22.1053">
        <g id="Group">
          <path d={svgPaths.p20f89700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[1.76%_81.93%_3%_0.53%]" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function FE5IpYx5DqOfTKygpNvg1NjduksSvg() {
  return (
    <div className="h-[23.211px] overflow-clip relative shrink-0 w-[126px]" data-name="fE5IpYx5DQOfTKygpNVG1Njduks.svg">
      <div className="absolute inset-[0.5%_0.18%_11.61%_21.97%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.0866 20.3987">
          <path d={svgPaths.p2192ca00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup4 />
    </div>
  );
}

function FE5IpYx5DqOfTKygpNvg1NjduksSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-center justify-center overflow-clip py-[1.895px] relative shrink-0 w-[126px]" data-name="fE5IpYx5DQOfTKygpNVG1Njduks.svg fill">
      <FE5IpYx5DqOfTKygpNvg1NjduksSvg />
    </div>
  );
}

function Opacity1BrandLogo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Opacity 1 → Brand Logo">
      <FE5IpYx5DqOfTKygpNvg1NjduksSvgFill />
    </div>
  );
}

function BrandLogo5() {
  return (
    <div className="content-stretch flex flex-col h-[27px] items-start justify-center relative shrink-0 w-[126px]" data-name="Brand Logo 1">
      <Opacity1BrandLogo3 />
    </div>
  );
}

function BrandList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand List">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap items-center justify-between pr-[0.02px] relative w-full">
          <BrandLogo1Opacity />
          <BrandLogo1 />
          <BrandLogo2 />
          <BrandLogo3 />
          <BrandLogo4 />
          <BrandLogo5 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle1 />
      <BrandList />
    </div>
  );
}

function BrandSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[65px] pt-[114px] px-[60px] right-0 top-[1028.45px]" data-name="Brand Section">
      <Container27 />
    </div>
  );
}

function SolutionImage() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="solution-image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-17.42%] max-w-none top-0 w-[134.84%]" src={imgSolutionImage} />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute aspect-[616/554] left-0 right-[53.33%] rounded-[16px] top-0" data-name="Image">
      <SolutionImage />
    </div>
  );
}

function YourPartnerInReliableRoofingSolutionsHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-name="Your Partner in Reliable Roofing Solutions → Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[76.8px] not-italic relative shrink-0 text-[#190d00] text-[64px] tracking-[-2px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Your Partner in Reliable `}</p>
        <p>Roofing Solutions</p>
      </div>
    </div>
  );
}

function ProtectYourHomeWithTheHighestQualityRoofingServicesFromInstallationToRepairsWeveGotYouCoveredGetAFreeQuoteToday1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-[568px]" data-name="Protect your home with the highest quality roofing services. From installation to repairs, we’ve got you covered. Get a free quote today!">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#54504d] text-[16px] whitespace-nowrap">
        <p className="mb-0">{`Protect your home with the highest quality roofing services. From installation `}</p>
        <p>to repairs, we’ve got you covered. Get a free quote today!</p>
      </div>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.205px] items-start relative shrink-0 w-full" data-name="Section Title">
      <YourPartnerInReliableRoofingSolutionsHeading />
      <ProtectYourHomeWithTheHighestQualityRoofingServicesFromInstallationToRepairsWeveGotYouCoveredGetAFreeQuoteToday1 />
    </div>
  );
}

function Line() {
  return <div className="bg-[#fb8500] h-full shrink-0 w-[2px]" data-name="Line" />;
}

function LineAlignStretch() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Line:align-stretch">
      <Line />
    </div>
  );
}

function PremiumRoofInstallation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Premium Roof Installation">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[32px]">Premium Roof Installation</p>
      </div>
    </div>
  );
}

function OurExpertTeamEnsuresSeamlessRoofInstallation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Our expert team ensures seamless roof installation.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Our expert team ensures seamless roof installation.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start min-w-[630px] relative shrink-0" data-name="Text">
      <PremiumRoofInstallation />
      <OurExpertTeamEnsuresSeamlessRoofInstallation />
    </div>
  );
}

function Desktop() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Desktop">
      <LineAlignStretch />
      <Text />
    </div>
  );
}

function Line1() {
  return <div className="bg-[#fb8500] h-full shrink-0 w-[2px]" data-name="Line" />;
}

function LineAlignStretch1() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Line:align-stretch">
      <Line1 />
    </div>
  );
}

function PremiumRoofInstallation1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Premium Roof Installation">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[32px]">Fast and Reliable Repairs</p>
      </div>
    </div>
  );
}

function OurExpertTeamEnsuresSeamlessRoofInstallation1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Our expert team ensures seamless roof installation.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Don’t let leaks or damage compromise your safety.</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start min-w-[630px] relative shrink-0" data-name="Text">
      <PremiumRoofInstallation1 />
      <OurExpertTeamEnsuresSeamlessRoofInstallation1 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Desktop">
      <LineAlignStretch1 />
      <Text1 />
    </div>
  );
}

function Line2() {
  return <div className="bg-[#fb8500] h-full shrink-0 w-[2px]" data-name="Line" />;
}

function LineAlignStretch2() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Line:align-stretch">
      <Line2 />
    </div>
  );
}

function PremiumRoofInstallation2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Premium Roof Installation">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[20px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[32px]">Stress-Free Roof Replacement</p>
      </div>
    </div>
  );
}

function OurExpertTeamEnsuresSeamlessRoofInstallation2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Our expert team ensures seamless roof installation.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Upgrade to a brand-new roof with ease.</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start min-w-[630px] relative shrink-0" data-name="Text">
      <PremiumRoofInstallation2 />
      <OurExpertTeamEnsuresSeamlessRoofInstallation2 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Desktop">
      <LineAlignStretch2 />
      <Text2 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Features">
      <Desktop />
      <Desktop1 />
      <Desktop2 />
    </div>
  );
}

function TitleFeatures() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-[672px] max-w-[648px] right-0 top-[calc(50%-1.16px)]" data-name="Title + Features">
      <SectionTitle2 />
      <Features />
    </div>
  );
}

function ContainerContent() {
  return (
    <div className="h-[554px] overflow-clip relative shrink-0 w-full" data-name="Container → Content">
      <Image2 />
      <TitleFeatures />
    </div>
  );
}

function AboutSectionSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[70px] pt-[65px] px-[60px] right-0 top-[1305.45px]" data-name="About Section Section">
      <ContainerContent />
    </div>
  );
}

function YourPartnerInReliableRoofingSolutionsHeading1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Your Partner in Reliable Roofing Solutions → Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">From Consultation to Completion</p>
      </div>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Title">
      <YourPartnerInReliableRoofingSolutionsHeading1 />
    </div>
  );
}

function ServiceImage() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Service Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-50.24%] max-w-none top-0 w-[200.48%]" src={imgServiceImage} />
      </div>
    </div>
  );
}

function RoofInstallationHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Roof Installation → Heading 4">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">
        <p className="leading-[52px] whitespace-pre-wrap">Roof Installation</p>
      </div>
    </div>
  );
}

function ExpertiseInMaterialsLikeAsphaltShinglesMetalTilesAndFlatRoofing() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Expertise in materials like asphalt shingles, metal, tiles, and flat roofing.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expertise in materials like asphalt shingles, metal, `}</p>
        <p>tiles, and flat roofing.</p>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[7.205px] items-start relative shrink-0 w-full" data-name="Card Title">
      <RoofInstallationHeading />
      <ExpertiseInMaterialsLikeAsphaltShinglesMetalTilesAndFlatRoofing />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Get Service</p>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container31 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
            <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg3 />
    </div>
  );
}

function IconBox10() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Icon Box 02">
      <Container32 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center justify-center relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch />
      <IconBox10 />
    </div>
  );
}

function ButtonButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button/Button">
      <Content2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Content">
      <CardTitle />
      <ButtonButton />
    </div>
  );
}

function Desktop3() {
  return (
    <div className="h-[564px] relative rounded-[8px] shrink-0 w-full" data-name="Desktop">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[32px] relative size-full">
          <ServiceImage />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] inset-0 to-[55%] to-[rgba(0,0,0,0)]" data-name="Overlay" />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Desktop3 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[422.39px]" data-name="Link">
      <Container30 />
    </div>
  );
}

function ServiceImage1() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Service Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-50.24%] max-w-none top-0 w-[200.48%]" src={imgServiceImage1} />
      </div>
    </div>
  );
}

function RoofInstallationHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Roof Installation → Heading 4">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">
        <p className="leading-[52px] whitespace-pre-wrap">Roof Inspection</p>
      </div>
    </div>
  );
}

function ExpertiseInMaterialsLikeAsphaltShinglesMetalTilesAndFlatRoofing1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Expertise in materials like asphalt shingles, metal, tiles, and flat roofing.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expertise in materials like asphalt shingles, metal, `}</p>
        <p>tiles, and flat roofing.</p>
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.205px] items-start relative shrink-0 w-full" data-name="Card Title">
      <RoofInstallationHeading1 />
      <ExpertiseInMaterialsLikeAsphaltShinglesMetalTilesAndFlatRoofing1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Get Service</p>
      </div>
    </div>
  );
}

function GetInTouch1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container34 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
            <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg4 />
    </div>
  );
}

function IconBox3() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Icon Box 02">
      <Container35 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center justify-center relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch1 />
      <IconBox3 />
    </div>
  );
}

function ButtonButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button/Button">
      <Content4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Content">
      <CardTitle1 />
      <ButtonButton1 />
    </div>
  );
}

function Desktop4() {
  return (
    <div className="h-[564px] relative rounded-[8px] shrink-0 w-full" data-name="Desktop">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[32px] relative size-full">
          <ServiceImage1 />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] inset-0 to-[55%] to-[rgba(0,0,0,0)]" data-name="Overlay" />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Desktop4 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[422.39px]" data-name="Link">
      <Container33 />
    </div>
  );
}

function ServiceImage2() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Service Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-52.34%] max-w-none top-0 w-[204.69%]" src={imgServiceImage2} />
      </div>
    </div>
  );
}

function RoofInstallationHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Roof Installation → Heading 4">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white tracking-[-1px] w-full">
        <p className="leading-[52px] whitespace-pre-wrap">Flat Roofing</p>
      </div>
    </div>
  );
}

function ExpertiseInMaterialsLikeAsphaltShinglesMetalTilesAndFlatRoofing2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Expertise in materials like asphalt shingles, metal, tiles, and flat roofing.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expertise in materials like asphalt shingles, metal, `}</p>
        <p>tiles, and flat roofing.</p>
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.205px] items-start relative shrink-0 w-full" data-name="Card Title">
      <RoofInstallationHeading2 />
      <ExpertiseInMaterialsLikeAsphaltShinglesMetalTilesAndFlatRoofing2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Get Service</p>
      </div>
    </div>
  );
}

function GetInTouch2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container37 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
            <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg5 />
    </div>
  );
}

function IconBox4() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Icon Box 02">
      <Container38 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch2 />
      <IconBox4 />
    </div>
  );
}

function ButtonButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button/Button">
      <Content6 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Content">
      <CardTitle2 />
      <ButtonButton2 />
    </div>
  );
}

function Desktop5() {
  return (
    <div className="h-[564px] relative rounded-[8px] shrink-0 w-full" data-name="Desktop">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[32px] relative size-full">
          <ServiceImage2 />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] inset-0 to-[55%] to-[rgba(0,0,0,0)]" data-name="Overlay" />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Desktop5 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[422.39px]" data-name="Link">
      <Container36 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function ContainerContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container → Content">
      <SectionTitle3 />
      <Container29 />
    </div>
  );
}

function ServiceSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[120px] pt-[74px] px-[60px] right-0 top-[1994.45px]" data-name="Service Section">
      <ContainerContent1 />
    </div>
  );
}

function YourPartnerInReliableRoofingSolutionsHeading2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Your Partner in Reliable Roofing Solutions → Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">From Repairs to Installations</p>
      </div>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Title">
      <YourPartnerInReliableRoofingSolutionsHeading2 />
    </div>
  );
}

function Line3() {
  return <div className="absolute bg-gradient-to-r from-[#1a1300] h-px left-[2px] opacity-50 right-[-2px] to-white top-[32px]" data-name="Line" />;
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[32px] text-center tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[38.4px]">1</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="1">
      <Container40 />
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[#ffb703] content-stretch flex flex-col items-center justify-center px-[21px] py-[13px] relative rounded-[32px] shrink-0 size-[64px]" data-name="Icon Circle">
      <Component />
    </div>
  );
}

function ScheduleAFreeInspectionHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Schedule a Free Inspection → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[#160c00] text-[28px] tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Schedule a Free `}</p>
        <p>Inspection</p>
      </div>
    </div>
  );
}

function ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Reach out to us to book a free roof inspection at your convenience.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#160c00] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Reach out to us to book a free roof `}</p>
        <p>inspection at your convenience.</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.205px] items-start relative shrink-0 w-full" data-name="Text">
      <ScheduleAFreeInspectionHeading />
      <ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience />
    </div>
  );
}

function Default() {
  return (
    <div className="content-stretch flex flex-col gap-[31.2px] items-start relative shrink-0 w-full" data-name="Default">
      <IconCircle />
      <Text3 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Default />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[32px] text-center tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[38.4px]">2</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="1">
      <Container42 />
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[#ffb703] content-stretch flex flex-col items-center justify-center px-[21px] py-[13px] relative rounded-[32px] shrink-0 size-[64px]" data-name="Icon Circle">
      <Component1 />
    </div>
  );
}

function ScheduleAFreeInspectionHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Schedule a Free Inspection → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[#160c00] text-[28px] tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Get a Customized `}</p>
        <p>Quote</p>
      </div>
    </div>
  );
}

function ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Reach out to us to book a free roof inspection at your convenience.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#160c00] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Based on our inspection, we’ll provide a `}</p>
        <p>detailed.</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[11.205px] items-start relative shrink-0 w-full" data-name="Text">
      <ScheduleAFreeInspectionHeading1 />
      <ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience1 />
    </div>
  );
}

function Default1() {
  return (
    <div className="content-stretch flex flex-col gap-[31.2px] items-start relative shrink-0 w-full" data-name="Default">
      <IconCircle1 />
      <Text4 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Default1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[32px] text-center tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[38.4px]">3</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="1">
      <Container44 />
    </div>
  );
}

function IconCircle2() {
  return (
    <div className="bg-[#ffb703] content-stretch flex flex-col items-center justify-center px-[21px] py-[13px] relative rounded-[32px] shrink-0 size-[64px]" data-name="Icon Circle">
      <Component2 />
    </div>
  );
}

function ScheduleAFreeInspectionHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Schedule a Free Inspection → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[#160c00] text-[28px] tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Professional Service `}</p>
        <p>Execution</p>
      </div>
    </div>
  );
}

function ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Reach out to us to book a free roof inspection at your convenience.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#160c00] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Our skilled team gets to work, using top-</p>
        <p>quality materials.</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.205px] items-start relative shrink-0 w-full" data-name="Text">
      <ScheduleAFreeInspectionHeading2 />
      <ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience2 />
    </div>
  );
}

function Default2() {
  return (
    <div className="content-stretch flex flex-col gap-[31.2px] items-start relative shrink-0 w-full" data-name="Default">
      <IconCircle2 />
      <Text5 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Default2 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[32px] text-center tracking-[-1.8px] whitespace-nowrap">
        <p className="leading-[38.4px]">4</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="1">
      <Container46 />
    </div>
  );
}

function IconCircle3() {
  return (
    <div className="bg-[#ffb703] content-stretch flex flex-col items-center justify-center px-[21px] py-[13px] relative rounded-[32px] shrink-0 size-[64px]" data-name="Icon Circle">
      <Component3 />
    </div>
  );
}

function ScheduleAFreeInspectionHeading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Schedule a Free Inspection → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[#160c00] text-[28px] tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Final Walkthrough & `}</p>
        <p>Warranty</p>
      </div>
    </div>
  );
}

function ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.605px] relative shrink-0 w-full" data-name="Reach out to us to book a free roof inspection at your convenience.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#160c00] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We ensure your satisfaction with a final `}</p>
        <p>walkthrough.</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[11.205px] items-start relative shrink-0 w-full" data-name="Text">
      <ScheduleAFreeInspectionHeading3 />
      <ReachOutToUsToBookAFreeRoofInspectionAtYourConvenience3 />
    </div>
  );
}

function Default3() {
  return (
    <div className="content-stretch flex flex-col gap-[31.2px] items-start relative shrink-0 w-full" data-name="Default">
      <IconCircle3 />
      <Text6 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Default3 />
    </div>
  );
}

function HowItWorksList() {
  return (
    <div className="relative shrink-0 w-full" data-name="How It Works List">
      <div className="content-start flex flex-wrap items-start justify-between pr-[0.02px] relative w-full">
        <Line3 />
        <Container39 />
        <Container41 />
        <Container43 />
        <Container45 />
      </div>
    </div>
  );
}

function ContainerContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center relative shrink-0 w-full" data-name="Container → Content">
      <SectionTitle4 />
      <HowItWorksList />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="absolute bg-[#fff3e6] content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[120px] pt-[119px] px-[60px] right-0 top-[2886.25px]" data-name="How It Works Section">
      <ContainerContent2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[0.8px] relative" data-name="Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-center text-white tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">See The Difference We Make</p>
      </div>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section Title">
      <Heading />
    </div>
  );
}

function ProjectImage() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Project Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-9.01%] max-w-none top-0 w-[118.02%]" src={imgProjectImage} />
      </div>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gR6ibprtIP4YloenekMpxdQSaC4.svg">
          <path d={svgPaths.p23f92c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4SvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg fill">
      <GR6IbprtIp4YloenekMpxdQSaC4Svg />
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Location Icon">
      <GR6IbprtIp4YloenekMpxdQSaC4SvgFill />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <LocationIcon />
    </div>
  );
}

function IconBox() {
  return (
    <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0" data-name="Icon Box">
      <Icon3 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">123 Main Street, New York, NY 10001</p>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Location">
      <IconBox />
      <Container51 />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Profile">
      <Location />
    </div>
  );
}

function Content7() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(12,12,12,0.5)] bottom-[0.41px] content-stretch flex items-center left-0 pb-[13px] pt-[12px] px-[16px] right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Content">
      <Profile />
    </div>
  );
}

function Default4() {
  return (
    <div className="h-[332px] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <ProjectImage />
      <Content7 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Default4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex items-center left-[0.33%] right-[67.67%] top-0" data-name="Container">
      <Container50 />
    </div>
  );
}

function ProjectImage1() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Project Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-9.01%] max-w-none top-0 w-[118.02%]" src={imgProjectImage1} />
      </div>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gR6ibprtIP4YloenekMpxdQSaC4.svg">
          <path d={svgPaths.p23f92c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4SvgFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg fill">
      <GR6IbprtIp4YloenekMpxdQSaC4Svg1 />
    </div>
  );
}

function LocationIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Location Icon">
      <GR6IbprtIp4YloenekMpxdQSaC4SvgFill1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <LocationIcon1 />
    </div>
  );
}

function IconBox1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0" data-name="Icon Box">
      <Icon4 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">456 Elm Avenue, Los Angeles, CA 90001</p>
      </div>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Location">
      <IconBox1 />
      <Container54 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Profile">
      <Location1 />
    </div>
  );
}

function Content8() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(12,12,12,0.5)] bottom-[0.41px] content-stretch flex items-center left-0 pb-[13px] pt-[12px] px-[16px] right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Content">
      <Profile1 />
    </div>
  );
}

function Default5() {
  return (
    <div className="h-[332px] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <ProjectImage1 />
      <Content8 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Default5 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex items-center left-[34%] right-[34%] top-0" data-name="Container">
      <Container53 />
    </div>
  );
}

function ProjectImage2() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Project Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-17.52%] max-w-none top-0 w-[135.04%]" src={imgProjectImage2} />
      </div>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gR6ibprtIP4YloenekMpxdQSaC4.svg">
          <path d={svgPaths.p23f92c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4SvgFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg fill">
      <GR6IbprtIp4YloenekMpxdQSaC4Svg2 />
    </div>
  );
}

function LocationIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Location Icon">
      <GR6IbprtIp4YloenekMpxdQSaC4SvgFill2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <LocationIcon2 />
    </div>
  );
}

function IconBox2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0" data-name="Icon Box">
      <Icon5 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">789 Pine Road, Chicago, IL 60601</p>
      </div>
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Location">
      <IconBox2 />
      <Container57 />
    </div>
  );
}

function Profile2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Profile">
      <Location2 />
    </div>
  );
}

function Content9() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(12,12,12,0.5)] bottom-[0.41px] content-stretch flex items-center left-0 pb-[13px] pt-[12px] px-[16px] right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Content">
      <Profile2 />
    </div>
  );
}

function Default6() {
  return (
    <div className="h-[332px] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <ProjectImage2 />
      <Content9 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Default6 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex items-center left-[67.67%] right-[0.33%] top-0" data-name="Container">
      <Container56 />
    </div>
  );
}

function ProjectImage3() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Project Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-9.01%] max-w-none top-0 w-[118.02%]" src={imgProjectImage3} />
      </div>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gR6ibprtIP4YloenekMpxdQSaC4.svg">
          <path d={svgPaths.p23f92c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4SvgFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg fill">
      <GR6IbprtIp4YloenekMpxdQSaC4Svg3 />
    </div>
  );
}

function LocationIcon3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Location Icon">
      <GR6IbprtIp4YloenekMpxdQSaC4SvgFill3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <LocationIcon3 />
    </div>
  );
}

function IconBox5() {
  return (
    <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0" data-name="Icon Box">
      <Icon6 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">321 Oak Drive, Houston, TX 77001</p>
      </div>
    </div>
  );
}

function Location3() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Location">
      <IconBox5 />
      <Container60 />
    </div>
  );
}

function Profile3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Profile">
      <Location3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(12,12,12,0.5)] bottom-[0.41px] content-stretch flex items-center left-0 pb-[13px] pt-[12px] px-[16px] right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Content">
      <Profile3 />
    </div>
  );
}

function Default7() {
  return (
    <div className="h-[332px] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <ProjectImage3 />
      <Content10 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Default7 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex items-center left-[0.33%] right-[67.67%] top-[354px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function ProjectImage4() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Project Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-20.11%] max-w-none top-0 w-[140.22%]" src={imgProjectImage4} />
      </div>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gR6ibprtIP4YloenekMpxdQSaC4.svg">
          <path d={svgPaths.p23f92c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4SvgFill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg fill">
      <GR6IbprtIp4YloenekMpxdQSaC4Svg4 />
    </div>
  );
}

function LocationIcon4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Location Icon">
      <GR6IbprtIp4YloenekMpxdQSaC4SvgFill4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <LocationIcon4 />
    </div>
  );
}

function IconBox6() {
  return (
    <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0" data-name="Icon Box">
      <Icon7 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">654 Maple Lane, Miami, FL 33101</p>
      </div>
    </div>
  );
}

function Location4() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Location">
      <IconBox6 />
      <Container63 />
    </div>
  );
}

function Profile4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Profile">
      <Location4 />
    </div>
  );
}

function Content11() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(12,12,12,0.5)] bottom-[0.41px] content-stretch flex items-center left-0 pb-[13px] pt-[12px] px-[16px] right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Content">
      <Profile4 />
    </div>
  );
}

function Default8() {
  return (
    <div className="h-[332px] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <ProjectImage4 />
      <Content11 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Default8 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex items-center left-[34%] right-[34%] top-[354px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function ProjectImage5() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Project Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-10.43%] max-w-none top-0 w-[120.85%]" src={imgProjectImage5} />
      </div>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gR6ibprtIP4YloenekMpxdQSaC4.svg">
          <path d={svgPaths.p23f92c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function GR6IbprtIp4YloenekMpxdQSaC4SvgFill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="gR6ibprtIP4YloenekMpxdQSaC4.svg fill">
      <GR6IbprtIp4YloenekMpxdQSaC4Svg5 />
    </div>
  );
}

function LocationIcon5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Location Icon">
      <GR6IbprtIp4YloenekMpxdQSaC4SvgFill5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <LocationIcon5 />
    </div>
  );
}

function IconBox7() {
  return (
    <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0" data-name="Icon Box">
      <Icon8 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">987 Cedar Street, Seattle, WA 98101</p>
      </div>
    </div>
  );
}

function Location5() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full" data-name="Location">
      <IconBox7 />
      <Container66 />
    </div>
  );
}

function Profile5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Profile">
      <Location5 />
    </div>
  );
}

function Content12() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(12,12,12,0.5)] bottom-[0.41px] content-stretch flex items-center left-0 pb-[13px] pt-[12px] px-[16px] right-0 rounded-bl-[8px] rounded-br-[8px]" data-name="Content">
      <Profile5 />
    </div>
  );
}

function Default9() {
  return (
    <div className="h-[332px] relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <ProjectImage5 />
      <Content12 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Default9 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex items-center left-[67.67%] right-[0.33%] top-[354px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[686px] relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container52 />
      <Container55 />
      <Container58 />
      <Container61 />
      <Container64 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">View All Projects</p>
      </div>
    </div>
  );
}

function GetInTouch3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container68 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.92px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 1.83333">
            <path d="M0.916667 0.916667H13.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 14.6667">
            <path d={svgPaths.p19508150} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[22px] top-[2px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function IconBox8() {
  return (
    <div className="overflow-clip relative rounded-[6px] shrink-0 size-[26px]" data-name="Icon Box 02">
      <Container69 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center pb-[10px] pt-[9px] px-[16px] relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch3 />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <IconBox8 />
    </div>
  );
}

function LinkButtonBorder() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Button Border">
      <Content13 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkButtonBorder />
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Projects">
      <Container48 />
      <Container67 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle5 />
      <Projects />
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="absolute bg-[#190d00] content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[120px] pt-[109px] px-[60px] right-0 top-[3508.67px]" data-name="Projects Section">
      <Container47 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[0.8px] relative" data-name="Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">Your One-Stop Roofing Partner</p>
      </div>
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section Title">
      <Heading1 />
    </div>
  );
}

function QBRhjPAaTxL0NtIaNlrq8WxWjMSvg() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="qBRhjPAaTxL0NTIaNLRQ8WXWjM.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="qBRhjPAaTxL0NTIaNLRQ8WXWjM.svg">
          <path clipRule="evenodd" d={svgPaths.p1244a100} fill="var(--fill-0, #FB8500)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function QBRhjPAaTxL0NtIaNlrq8WxWjMSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[64px]" data-name="qBRhjPAaTxL0NTIaNLRQ8WXWjM.svg fill">
      <QBRhjPAaTxL0NtIaNlrq8WxWjMSvg />
    </div>
  );
}

function FeatureIcon() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Feature Icon">
      <QBRhjPAaTxL0NtIaNlrq8WxWjMSvgFill />
    </div>
  );
}

function Icon9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Icon">
      <FeatureIcon />
    </div>
  );
}

function DurableRoofInstallationHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Durable Roof Installation → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[28px] tracking-[-0.5px] w-full">
        <p className="leading-[36.4px] whitespace-pre-wrap">Durable Roof Installation</p>
      </div>
    </div>
  );
}

function BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Built to withstand the toughest weather conditions, our roof installations combine premium materials.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[#54504d] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Built to withstand the toughest weather conditions, our roof `}</p>
        <p>installations combine premium materials.</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <DurableRoofInstallationHeading />
      <BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials />
    </div>
  );
}

function Default10() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col gap-[39px] items-start left-0 max-w-[648px] pb-[48px] pt-[32px] px-[32px] right-[672px] rounded-[8px] top-0" data-name="Default">
      <Icon9 />
      <Text7 />
    </div>
  );
}

function QZkXzAKaOvWIjREdiu83RgXo3QUSvg() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="qZKXzAKaOvWIjREdiu83rgXo3qU.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="qZKXzAKaOvWIjREdiu83rgXo3qU.svg">
          <path d={svgPaths.p22f6f680} fill="var(--fill-0, #FB8500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function QZkXzAKaOvWIjREdiu83RgXo3QUSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[64px]" data-name="qZKXzAKaOvWIjREdiu83rgXo3qU.svg fill">
      <QZkXzAKaOvWIjREdiu83RgXo3QUSvg />
    </div>
  );
}

function FeatureIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Feature Icon">
      <QZkXzAKaOvWIjREdiu83RgXo3QUSvgFill />
    </div>
  );
}

function Icon10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Icon">
      <FeatureIcon1 />
    </div>
  );
}

function DurableRoofInstallationHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Durable Roof Installation → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[28px] tracking-[-0.5px] w-full">
        <p className="leading-[36.4px] whitespace-pre-wrap">Emergency Roof Repairs</p>
      </div>
    </div>
  );
}

function BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Built to withstand the toughest weather conditions, our roof installations combine premium materials.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[#54504d] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`When unexpected damage strikes, our team is ready to respond `}</p>
        <p>24/7. From leaks to storm damage everything.</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <DurableRoofInstallationHeading1 />
      <BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials1 />
    </div>
  );
}

function Default11() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col gap-[39px] items-start left-[672px] max-w-[648px] pb-[48px] pt-[32px] px-[32px] right-0 rounded-[8px] top-0" data-name="Default">
      <Icon10 />
      <Text8 />
    </div>
  );
}

function U24TpfPydBhkRgtJqi832Zn80MSvg() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="u24tpfPydBhkRgtJqi832Zn80M.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="u24tpfPydBhkRgtJqi832Zn80M.svg">
          <path d={svgPaths.p256da340} fill="var(--fill-0, #FB8500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function U24TpfPydBhkRgtJqi832Zn80MSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[64px]" data-name="u24tpfPydBhkRgtJqi832Zn80M.svg fill">
      <U24TpfPydBhkRgtJqi832Zn80MSvg />
    </div>
  );
}

function FeatureIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Feature Icon">
      <U24TpfPydBhkRgtJqi832Zn80MSvgFill />
    </div>
  );
}

function Icon11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Icon">
      <FeatureIcon2 />
    </div>
  );
}

function DurableRoofInstallationHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Durable Roof Installation → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[28px] tracking-[-0.5px] w-full">
        <p className="leading-[36.4px] whitespace-pre-wrap">Energy-Efficient Roofing</p>
      </div>
    </div>
  );
}

function BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Built to withstand the toughest weather conditions, our roof installations combine premium materials.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[#54504d] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Reduce energy costs with our eco-friendly roofing options.  We offer `}</p>
        <p>reflective materials and insulation solutions.</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <DurableRoofInstallationHeading2 />
      <BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials2 />
    </div>
  );
}

function Default12() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col gap-[39px] items-start left-0 max-w-[648px] pb-[48px] pt-[32px] px-[32px] right-[672px] rounded-[8px] top-[325.22px]" data-name="Default">
      <Icon11 />
      <Text9 />
    </div>
  );
}

function Fcs94PAAjH7KHzt0Q0Hsj6UtlxgSvg() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Fcs94pAAjH7kHzt0Q0HSJ6Utlxg.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Fcs94pAAjH7kHzt0Q0HSJ6Utlxg.svg">
          <path d={svgPaths.p1a4f7600} fill="var(--fill-0, #FB8500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Fcs94PAAjH7KHzt0Q0Hsj6UtlxgSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[64px]" data-name="Fcs94pAAjH7kHzt0Q0HSJ6Utlxg.svg fill">
      <Fcs94PAAjH7KHzt0Q0Hsj6UtlxgSvg />
    </div>
  );
}

function FeatureIcon3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Feature Icon">
      <Fcs94PAAjH7KHzt0Q0Hsj6UtlxgSvgFill />
    </div>
  );
}

function Icon12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Icon">
      <FeatureIcon3 />
    </div>
  );
}

function DurableRoofInstallationHeading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Durable Roof Installation → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[28px] tracking-[-0.5px] w-full">
        <p className="leading-[36.4px] whitespace-pre-wrap">Comprehensive Roof Inspections</p>
      </div>
    </div>
  );
}

function BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Built to withstand the toughest weather conditions, our roof installations combine premium materials.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[#54504d] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Stay ahead of potential issues with our detailed roof inspections.  We `}</p>
        <p>identify hidden problems.</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <DurableRoofInstallationHeading3 />
      <BuiltToWithstandTheToughestWeatherConditionsOurRoofInstallationsCombinePremiumMaterials3 />
    </div>
  );
}

function Default13() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col gap-[39px] items-start left-[672px] max-w-[648px] pb-[48px] pt-[32px] px-[32px] right-0 rounded-[8px] top-[325.22px]" data-name="Default">
      <Icon12 />
      <Text10 />
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="h-[626.44px] overflow-clip relative shrink-0 w-full" data-name="Feature Cards">
      <Default10 />
      <Default11 />
      <Default12 />
      <Default13 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[63.99px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle6 />
      <FeatureCards />
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[60px] pt-[119px] px-[60px] right-0 top-[4663.88px]" data-name="Features Section">
      <Container70 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[0.8px] relative" data-name="Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">Trusted By Families Like Yours</p>
      </div>
    </div>
  );
}

function SectionTitle7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section Title">
      <Heading2 />
    </div>
  );
}

function ExceptionalServiceFromStartToFinishTheTeamWasProfessionalEfficientAndTheRoofLooksFantastic() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Exceptional service from start to finish. The team was professional, efficient, and the roof looks fantastic!">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[34px] not-italic relative shrink-0 text-[#190d00] text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Exceptional service from start to finish. `}</p>
        <p>The team was professional, efficient!</p>
      </div>
    </div>
  );
}

function AuthorImage() {
  return (
    <div className="absolute inset-0 rounded-[56px]" data-name="Author Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[56px]">
        <img alt="" className="absolute h-[100.45%] left-0 max-w-none top-[-0.22%] w-full" src={imgAuthorImage} />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="relative rounded-[56px] shrink-0 size-[56px]" data-name="Image">
      <AuthorImage />
    </div>
  );
}

function JohnMiller() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="John Miller">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">John Miller</p>
      </div>
    </div>
  );
}

function Homeowner() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Homeowner">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">Homeowner</p>
      </div>
    </div>
  );
}

function AuthorDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="Author Details">
      <JohnMiller />
      <Homeowner />
    </div>
  );
}

function AuthorProfile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Author Profile">
      <Image3 />
      <AuthorDetails />
    </div>
  );
}

function TopContent() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Top Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[16px] relative w-full">
        <ExceptionalServiceFromStartToFinishTheTeamWasProfessionalEfficientAndTheRoofLooksFantastic />
        <AuthorProfile />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[1.23%_0.28%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[116.195px_25.679px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.194 25.6793">
        <g id="Group">
          <path d={svgPaths.p105eea00} fill="var(--fill-0, #FF9D28)" id="Vector" />
          <path d={svgPaths.p30be6b80} fill="var(--fill-0, #68C5ED)" id="Vector_2" />
          <path d={svgPaths.p26a9d700} fill="var(--fill-0, #044D80)" id="Vector_3" />
          <path d={svgPaths.p1cb59d00} fill="var(--fill-0, #E54747)" id="Vector_4" />
          <path d={svgPaths.p94d77f2} fill="var(--fill-0, #001305)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-[1.23%_0.28%_0_0]" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function XGvY9GtUbZox4BXjLqPm1EeXd8Svg() {
  return (
    <div className="h-[26px] overflow-clip relative shrink-0 w-[116.519px]" data-name="XGvY9GtUbZOX4bXjLQPm1EeXD8.svg">
      <ClipPathGroup5 />
    </div>
  );
}

function XGvY9GtUbZox4BXjLqPm1EeXd8SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-center justify-center overflow-clip px-[1.741px] relative shrink-0 w-[120px]" data-name="XGvY9GtUbZOX4bXjLQPm1EeXD8.svg fill">
      <XGvY9GtUbZox4BXjLqPm1EeXd8Svg />
    </div>
  );
}

function ImageCompanyLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Image → Company Logo">
      <XGvY9GtUbZox4BXjLqPm1EeXd8SvgFill />
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-end justify-end relative shrink-0 w-[120px]" data-name="Company Logo">
      <ImageCompanyLogo />
    </div>
  );
}

function Svg7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[10.01%_8.72%_10.93%_8.72%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8154 18.974">
          <path clipRule="evenodd" d={svgPaths.p34204000} fill="var(--fill-0, #FB8500)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">4.3 out of 5 Rating</p>
      </div>
    </div>
  );
}

function Component43OutOf5Rating() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="4.3 out of 5 Rating">
      <Container74 />
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating">
      <Container73 />
      <Component43OutOf5Rating />
    </div>
  );
}

function LogoReview() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo Review">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[16px] relative w-full">
          <CompanyLogo />
          <Rating />
        </div>
      </div>
    </div>
  );
}

function Defailt() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[8px] shrink-0 w-full" data-name="Defailt">
      <div className="content-stretch flex flex-col gap-[23.38px] items-start pb-[24px] pt-[8px] px-[8px] relative w-full">
        <TopContent />
        <LogoReview />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Defailt />
    </div>
  );
}

function ExceptionalServiceFromStartToFinishTheTeamWasProfessionalEfficientAndTheRoofLooksFantastic1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Exceptional service from start to finish. The team was professional, efficient, and the roof looks fantastic!">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[34px] not-italic relative shrink-0 text-[#190d00] text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Highly impressed with the quality of work. `}</p>
        <p>They finished ahead of schedule.</p>
      </div>
    </div>
  );
}

function AuthorImage1() {
  return (
    <div className="absolute inset-0 rounded-[56px]" data-name="Author Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[56px]">
        <img alt="" className="absolute h-[100.45%] left-0 max-w-none top-[-0.22%] w-full" src={imgAuthorImage1} />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative rounded-[56px] shrink-0 size-[56px]" data-name="Image">
      <AuthorImage1 />
    </div>
  );
}

function JohnMiller1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="John Miller">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Sarah Johnson</p>
      </div>
    </div>
  );
}

function Homeowner1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Homeowner">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">Property Manager</p>
      </div>
    </div>
  );
}

function AuthorDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="Author Details">
      <JohnMiller1 />
      <Homeowner1 />
    </div>
  );
}

function AuthorProfile1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Author Profile">
      <Image4 />
      <AuthorDetails1 />
    </div>
  );
}

function TopContent1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Top Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[16px] relative w-full">
        <ExceptionalServiceFromStartToFinishTheTeamWasProfessionalEfficientAndTheRoofLooksFantastic1 />
        <AuthorProfile1 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[1.23%_0.28%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[116.195px_25.679px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.194 25.6793">
        <g id="Group">
          <path d={svgPaths.p105eea00} fill="var(--fill-0, #FF9D28)" id="Vector" />
          <path d={svgPaths.p30be6b80} fill="var(--fill-0, #68C5ED)" id="Vector_2" />
          <path d={svgPaths.p26a9d700} fill="var(--fill-0, #044D80)" id="Vector_3" />
          <path d={svgPaths.p1cb59d00} fill="var(--fill-0, #E54747)" id="Vector_4" />
          <path d={svgPaths.p94d77f2} fill="var(--fill-0, #001305)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-[1.23%_0.28%_0_0]" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function XGvY9GtUbZox4BXjLqPm1EeXd8Svg1() {
  return (
    <div className="h-[26px] overflow-clip relative shrink-0 w-[116.519px]" data-name="XGvY9GtUbZOX4bXjLQPm1EeXD8.svg">
      <ClipPathGroup6 />
    </div>
  );
}

function XGvY9GtUbZox4BXjLqPm1EeXd8SvgFill1() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-center justify-center overflow-clip px-[1.741px] relative shrink-0 w-[120px]" data-name="XGvY9GtUbZOX4bXjLQPm1EeXD8.svg fill">
      <XGvY9GtUbZox4BXjLqPm1EeXd8Svg1 />
    </div>
  );
}

function ImageCompanyLogo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Image → Company Logo">
      <XGvY9GtUbZox4BXjLqPm1EeXd8SvgFill1 />
    </div>
  );
}

function CompanyLogo1() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-end justify-end relative shrink-0 w-[120px]" data-name="Company Logo">
      <ImageCompanyLogo1 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[10.01%_8.72%_10.93%_8.72%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8154 18.974">
          <path clipRule="evenodd" d={svgPaths.p34204000} fill="var(--fill-0, #FB8500)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">4.3 out of 5 Rating</p>
      </div>
    </div>
  );
}

function Component43OutOf5Rating1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="4.3 out of 5 Rating">
      <Container77 />
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating">
      <Container76 />
      <Component43OutOf5Rating1 />
    </div>
  );
}

function LogoReview1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo Review">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[16px] relative w-full">
          <CompanyLogo1 />
          <Rating1 />
        </div>
      </div>
    </div>
  );
}

function Defailt1() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[8px] shrink-0 w-full" data-name="Defailt">
      <div className="content-stretch flex flex-col gap-[23.38px] items-start pb-[24px] pt-[8px] px-[8px] relative w-full">
        <TopContent1 />
        <LogoReview1 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Defailt1 />
    </div>
  );
}

function ExceptionalServiceFromStartToFinishTheTeamWasProfessionalEfficientAndTheRoofLooksFantastic2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Exceptional service from start to finish. The team was professional, efficient, and the roof looks fantastic!">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[34px] not-italic relative shrink-0 text-[#190d00] text-[20px] tracking-[-0.4px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Great communication and top-notch `}</p>
        <p>roofing materials. I’d recommend.</p>
      </div>
    </div>
  );
}

function AuthorImage2() {
  return (
    <div className="absolute inset-0 rounded-[56px]" data-name="Author Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[56px]">
        <img alt="" className="absolute h-[100.45%] left-0 max-w-none top-[-0.22%] w-full" src={imgAuthorImage2} />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="relative rounded-[56px] shrink-0 size-[56px]" data-name="Image">
      <AuthorImage2 />
    </div>
  );
}

function JohnMiller2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="John Miller">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">David Thompson</p>
      </div>
    </div>
  );
}

function Homeowner2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Homeowner">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">Business Owner</p>
      </div>
    </div>
  );
}

function AuthorDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-h-px min-w-px relative" data-name="Author Details">
      <JohnMiller2 />
      <Homeowner2 />
    </div>
  );
}

function AuthorProfile2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Author Profile">
      <Image5 />
      <AuthorDetails2 />
    </div>
  );
}

function TopContent2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Top Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[16px] relative w-full">
        <ExceptionalServiceFromStartToFinishTheTeamWasProfessionalEfficientAndTheRoofLooksFantastic2 />
        <AuthorProfile2 />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[1.23%_0.28%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[116.195px_25.679px]" data-name="Group" style={{ maskImage: `url('${imgGroup5}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.194 25.6793">
        <g id="Group">
          <path d={svgPaths.p105eea00} fill="var(--fill-0, #FF9D28)" id="Vector" />
          <path d={svgPaths.p30be6b80} fill="var(--fill-0, #68C5ED)" id="Vector_2" />
          <path d={svgPaths.p26a9d700} fill="var(--fill-0, #044D80)" id="Vector_3" />
          <path d={svgPaths.p1cb59d00} fill="var(--fill-0, #E54747)" id="Vector_4" />
          <path d={svgPaths.p94d77f2} fill="var(--fill-0, #001305)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-[1.23%_0.28%_0_0]" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function XGvY9GtUbZox4BXjLqPm1EeXd8Svg2() {
  return (
    <div className="h-[26px] overflow-clip relative shrink-0 w-[116.519px]" data-name="XGvY9GtUbZOX4bXjLQPm1EeXD8.svg">
      <ClipPathGroup7 />
    </div>
  );
}

function XGvY9GtUbZox4BXjLqPm1EeXd8SvgFill2() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-center justify-center overflow-clip px-[1.741px] relative shrink-0 w-[120px]" data-name="XGvY9GtUbZOX4bXjLQPm1EeXD8.svg fill">
      <XGvY9GtUbZox4BXjLqPm1EeXd8Svg2 />
    </div>
  );
}

function ImageCompanyLogo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Image → Company Logo">
      <XGvY9GtUbZox4BXjLqPm1EeXd8SvgFill2 />
    </div>
  );
}

function CompanyLogo2() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-end justify-end relative shrink-0 w-[120px]" data-name="Company Logo">
      <ImageCompanyLogo2 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[10.01%_8.72%_10.93%_8.72%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8154 18.974">
          <path clipRule="evenodd" d={svgPaths.p34204000} fill="var(--fill-0, #FB8500)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">4.3 out of 5 Rating</p>
      </div>
    </div>
  );
}

function Component43OutOf5Rating2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="4.3 out of 5 Rating">
      <Container80 />
    </div>
  );
}

function Rating2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating">
      <Container79 />
      <Component43OutOf5Rating2 />
    </div>
  );
}

function LogoReview2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo Review">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[16px] relative w-full">
          <CompanyLogo2 />
          <Rating2 />
        </div>
      </div>
    </div>
  );
}

function Defailt2() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[8px] shrink-0 w-full" data-name="Defailt">
      <div className="content-stretch flex flex-col gap-[23.38px] items-start pb-[24px] pt-[8px] px-[8px] relative w-full">
        <TopContent2 />
        <LogoReview2 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[422.39px]" data-name="Container">
      <Defailt2 />
    </div>
  );
}

function Tertimonials() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tertimonials">
      <Container72 />
      <Container75 />
      <Container78 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle7 />
      <Tertimonials />
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[60px] pt-[59px] px-[60px] right-0 top-[5611.11px]" data-name="Testimonial Section">
      <Container71 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[0.8px] relative" data-name="Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">{`Roofing Tips & Insights`}</p>
      </div>
    </div>
  );
}

function SectionTitle8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section Title">
      <Heading4 />
    </div>
  );
}

function BlogImage() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Blog Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-29.44%] max-w-none top-0 w-[158.89%]" src={imgBlogImage} />
      </div>
    </div>
  );
}

function Component12January() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="12 January, 2025">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">January 2, 2025</p>
      </div>
    </div>
  );
}

function TheUltimateGuideToChoosingTheRightRoofingMaterialHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="The Ultimate Guide to Choosing the Right Roofing Material → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Ultimate Guide to Choosing the Right `}</p>
        <p>Roofing Material</p>
      </div>
    </div>
  );
}

function DateTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Date + Title">
      <Component12January />
      <TheUltimateGuideToChoosingTheRightRoofingMaterialHeading />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <DateTitle />
    </div>
  );
}

function Big() {
  return (
    <div className="h-[702px] relative rounded-[8px] shrink-0 w-full" data-name="Big">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[24px] px-[24px] relative size-full">
          <BlogImage />
          <div className="absolute bg-gradient-to-b from-[45%] from-[rgba(0,0,0,0)] inset-0 opacity-70 rounded-[8px] to-[66%] to-black" data-name="Shadow" />
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[662.41px]" data-name="Container">
      <Big />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Link">
      <Container83 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center relative shrink-0 w-[662.41px]" data-name="Container">
      <Link3 />
    </div>
  );
}

function BlogImage1() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Blog Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[124.29%] left-0 max-w-none top-[-12.15%] w-full" src={imgBlogImage1} />
      </div>
    </div>
  );
}

function Component12January1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="12 January, 2025">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">January 4, 2025</p>
      </div>
    </div>
  );
}

function TheUltimateGuideToChoosingTheRightRoofingMaterialHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="The Ultimate Guide to Choosing the Right Roofing Material → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How Weather Affects Your Roof and What You `}</p>
        <p>Can Do About It</p>
      </div>
    </div>
  );
}

function DateTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Date + Title">
      <Component12January1 />
      <TheUltimateGuideToChoosingTheRightRoofingMaterialHeading1 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <DateTitle1 />
    </div>
  );
}

function Small() {
  return (
    <div className="h-[340px] relative rounded-[8px] shrink-0 w-full" data-name="Small">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[24px] px-[24px] relative size-full">
          <BlogImage1 />
          <div className="absolute bg-gradient-to-b from-[45%] from-[rgba(0,0,0,0)] inset-0 opacity-70 rounded-[8px] to-[66%] to-black" data-name="Shadow" />
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[633.59px]" data-name="Container">
      <Small />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Link">
      <Container85 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function BlogImage2() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="Blog Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[124.29%] left-0 max-w-none top-[-12.15%] w-full" src={imgBlogImage2} />
      </div>
    </div>
  );
}

function Component12January2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="12 January, 2025">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[30.4px] whitespace-pre-wrap">January 6, 2025</p>
      </div>
    </div>
  );
}

function TheUltimateGuideToChoosingTheRightRoofingMaterialHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="The Ultimate Guide to Choosing the Right Roofing Material → Heading 5">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[36.4px] not-italic relative shrink-0 text-[28px] text-white tracking-[-0.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Roof Repair vs. Replacement: How to Make the `}</p>
        <p>Right Choice</p>
      </div>
    </div>
  );
}

function DateTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Date + Title">
      <Component12January2 />
      <TheUltimateGuideToChoosingTheRightRoofingMaterialHeading2 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <DateTitle2 />
    </div>
  );
}

function Small1() {
  return (
    <div className="h-[340px] relative rounded-[8px] shrink-0 w-full" data-name="Small">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[24px] px-[24px] relative size-full">
          <BlogImage2 />
          <div className="absolute bg-gradient-to-b from-[45%] from-[rgba(0,0,0,0)] inset-0 opacity-70 rounded-[8px] to-[66%] to-black" data-name="Shadow" />
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[633.59px]" data-name="Container">
      <Small1 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Link">
      <Container87 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-start flex flex-wrap items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Link5 />
    </div>
  );
}

function BlogColm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-[633.59px]" data-name="Blog Colm">
      <Container84 />
      <Container86 />
    </div>
  );
}

function Blogs() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Blogs">
      <Container82 />
      <BlogColm />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle8 />
      <Blogs />
    </div>
  );
}

function InsightSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[60px] pt-[59px] px-[60px] right-0 top-[6150.31px]" data-name="Insight Section">
      <Container81 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pb-[0.8px] relative" data-name="Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#190d00] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[76.8px]">Help Center: Roofing Edition</p>
      </div>
    </div>
  );
}

function SectionTitle9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section Title">
      <Heading5 />
    </div>
  );
}

function WhatIsGrataskAndHowDoesItHelpWithTaskManagement() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="What is Gratask and how does it help with task management?">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">What roofing materials do you offer?</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p6177000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg10 />
    </div>
  );
}

function OpenClose() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="Open/Close">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative w-full">
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <OpenClose />
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-name="Close">
      <Container90 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-end justify-center relative rounded-[16px] shrink-0" data-name="Icon">
      <Close />
    </div>
  );
}

function Question() {
  return (
    <div className="bg-[#fb8500] relative rounded-[10px] shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <WhatIsGrataskAndHowDoesItHelpWithTaskManagement />
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function GrataskIsAnAdvancedTaskManagementSoftwareAsAServiceSaaSDesignedToStreamlineWorkflowsEnhanceCollaborationAndBoostProductivityItProvidesAnIntuitivePlatformForOrganizingTasksManagingProjectsAndFacilitatingTeamCommunication() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Gratask is an advanced task management Software as a Service (SaaS) designed to streamline workflows, enhance collaboration, and boost productivity. It provides an intuitive platform for organizing tasks, managing projects, and facilitating team communication.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#160c00] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We offer a wide range of materials, including asphalt shingles, metal, tile, flat roofing `}</p>
        <p className="mb-0">{`systems (EPDM, TPO, PVC), and more. Our experts can help you choose the best option `}</p>
        <p>for your needs and budget.</p>
      </div>
    </div>
  );
}

function Answer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Answer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[20px] pl-[16px] pr-[60px] relative w-full">
          <GrataskIsAnAdvancedTaskManagementSoftwareAsAServiceSaaSDesignedToStreamlineWorkflowsEnhanceCollaborationAndBoostProductivityItProvidesAnIntuitivePlatformForOrganizingTasksManagingProjectsAndFacilitatingTeamCommunication />
        </div>
      </div>
    </div>
  );
}

function QuestionAnswer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14.905px] items-center justify-center min-h-px min-w-px relative" data-name="Question+Answer">
      <Question />
      <Answer />
    </div>
  );
}

function FaqSerial() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Faq Serial">
      <QuestionAnswer />
    </div>
  );
}

function Q1FaqDesktopOpen() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[16px] shrink-0 w-full" data-name="Q1 → FAQ Desktop Open">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <FaqSerial />
        </div>
      </div>
    </div>
  );
}

function WhatIsGrataskAndHowDoesItHelpWithTaskManagement1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="What is Gratask and how does it help with task management?">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">How long does it take to install a new roof?</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #160C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg11 />
    </div>
  );
}

function OpenClose1() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="Open/Close">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative w-full">
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <OpenClose1 />
    </div>
  );
}

function Open() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-name="Open">
      <Container92 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-end justify-center relative rounded-[16px] shrink-0" data-name="Icon">
      <Open />
    </div>
  );
}

function Question1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <WhatIsGrataskAndHowDoesItHelpWithTaskManagement1 />
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function QuestionAnswer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Question+Answer">
      <Question1 />
    </div>
  );
}

function FaqSerial1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Faq Serial">
      <QuestionAnswer1 />
    </div>
  );
}

function Q2FaqDesktopClose() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[16px] shrink-0 w-full" data-name="Q2 → FAQ Desktop Close">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <FaqSerial1 />
        </div>
      </div>
    </div>
  );
}

function WhatIsGrataskAndHowDoesItHelpWithTaskManagement2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="What is Gratask and how does it help with task management?">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Do you provide free estimates?</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #160C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg12 />
    </div>
  );
}

function OpenClose2() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="Open/Close">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative w-full">
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <OpenClose2 />
    </div>
  );
}

function Open1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-name="Open">
      <Container94 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-end justify-center relative rounded-[16px] shrink-0" data-name="Icon">
      <Open1 />
    </div>
  );
}

function Question2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <WhatIsGrataskAndHowDoesItHelpWithTaskManagement2 />
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function QuestionAnswer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Question+Answer">
      <Question2 />
    </div>
  );
}

function FaqSerial2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Faq Serial">
      <QuestionAnswer2 />
    </div>
  );
}

function Q3FaqDesktopClose() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[16px] shrink-0 w-full" data-name="Q3 → FAQ Desktop Close">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <FaqSerial2 />
        </div>
      </div>
    </div>
  );
}

function WhatIsGrataskAndHowDoesItHelpWithTaskManagement3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="What is Gratask and how does it help with task management?">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">How do I know if my roof needs repair or replacement?</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #160C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg13 />
    </div>
  );
}

function OpenClose3() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="Open/Close">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative w-full">
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <OpenClose3 />
    </div>
  );
}

function Open2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-name="Open">
      <Container96 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-end justify-center relative rounded-[16px] shrink-0" data-name="Icon">
      <Open2 />
    </div>
  );
}

function Question3() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <WhatIsGrataskAndHowDoesItHelpWithTaskManagement3 />
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function QuestionAnswer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Question+Answer">
      <Question3 />
    </div>
  );
}

function FaqSerial3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Faq Serial">
      <QuestionAnswer3 />
    </div>
  );
}

function Q4FaqDesktopClose() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[16px] shrink-0 w-full" data-name="Q4 → FAQ Desktop Close">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <FaqSerial3 />
        </div>
      </div>
    </div>
  );
}

function WhatIsGrataskAndHowDoesItHelpWithTaskManagement4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="What is Gratask and how does it help with task management?">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[20px] tracking-[-0.2px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Are your services covered by a warranty?</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #160C00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Svg14 />
    </div>
  );
}

function OpenClose4() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="Open/Close">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative w-full">
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="aspect-[24/24] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <OpenClose4 />
    </div>
  );
}

function Open3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-name="Open">
      <Container98 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex items-end justify-center relative rounded-[16px] shrink-0" data-name="Icon">
      <Open3 />
    </div>
  );
}

function Question4() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Question">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <WhatIsGrataskAndHowDoesItHelpWithTaskManagement4 />
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function QuestionAnswer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Question+Answer">
      <Question4 />
    </div>
  );
}

function FaqSerial4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Faq Serial">
      <QuestionAnswer4 />
    </div>
  );
}

function Q5FaqDesktopClose() {
  return (
    <div className="bg-[#fff3e6] relative rounded-[16px] shrink-0 w-full" data-name="Q5 → FAQ Desktop Close">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <FaqSerial4 />
        </div>
      </div>
    </div>
  );
}

function DesktopQ() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Desktop Q1">
      <Q1FaqDesktopOpen />
      <Q2FaqDesktopClose />
      <Q3FaqDesktopClose />
      <Q4FaqDesktopClose />
      <Q5FaqDesktopClose />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[745px] relative shrink-0 w-[745px]" data-name="Container">
      <DesktopQ />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle9 />
      <Container89 />
    </div>
  );
}

function FaqSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 min-w-[1440px] overflow-clip pb-[136px] pt-[59px] px-[60px] right-0 top-[7115.11px]" data-name="Faq Section">
      <Container88 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[92.4px] not-italic relative shrink-0 text-[88px] text-white tracking-[-2.3px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Protect Your `}</p>
        <p>Roof from Today</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[32.4px] not-italic relative shrink-0 text-[18px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Protect your home with the highest quality roofing services. `}</p>
        <p>From installation to repairs, we’ve got you covered.</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[516px]" data-name="Container">
      <Container104 />
    </div>
  );
}

function SectionTitle10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center max-w-[645px] relative shrink-0 w-[645px]" data-name="Section Title">
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Request a Consultation</p>
      </div>
    </div>
  );
}

function GetInTouch4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container105 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.92px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 1.83333">
            <path d="M0.916667 0.916667H13.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 14.6667">
            <path d={svgPaths.p19508150} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[22px] top-[2px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function IconBox9() {
  return (
    <div className="overflow-clip relative rounded-[6px] shrink-0 size-[26px]" data-name="Icon Box 02">
      <Container106 />
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-[#fb8500] content-stretch flex gap-[6px] items-center justify-center pb-[12px] pt-[11px] px-[16px] relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch4 />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#fb8500] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <IconBox9 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_4px_0px_rgba(228,163,0,0.4),inset_0px_7px_16px_0px_rgba(255,206,88,0.6)]" />
    </div>
  );
}

function LinkPrimaryButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Primary Button">
      <Content17 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[39.99px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle10 />
      <LinkPrimaryButton />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer - Desktop">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[180px] pt-[179.2px] px-[30px] relative w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-1.72%] max-w-none top-0 w-[103.44%]" src={imgFooterDesktop} />
          </div>
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <FooterDesktop />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[8027.13px]" data-name="Section - CTA">
      <Container100 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_81.28%_0_0.49%] mask-position-[-1px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup6}'), url('${imgGroup7}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 41">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pf3cb200} fill="var(--fill-0, #160C00)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p318cec00} fill="var(--fill-0, #160C00)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pa2728c0} fill="var(--fill-0, #160C00)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-[0_81.28%_0_0.49%]" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0_2.5%_0_0.49%]" data-name="Group">
      <ClipPathGroup9 />
      <div className="absolute inset-[31.61%_2.5%_11.26%_24.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-49.792px_-12.96px] mask-size-[203px_41px]" data-name="Vector" style={{ maskImage: `url('${imgGroup6}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.126 23.424">
          <path d={svgPaths.p39c08a00} fill="var(--fill-0, #160C00)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function OfsxW6M9QnxKizLlRwAlkdqxESvg() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-[203px]" data-name="ofsxW6m9qnxKIZLlRWAlkdqxE.svg">
      <ClipPathGroup8 />
    </div>
  );
}

function OfsxW6M9QnxKizLlRwAlkdqxESvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start justify-center overflow-clip py-[0.5px] relative shrink-0 w-[203px]" data-name="ofsxW6m9qnxKIZLlRWAlkdqxE.svg fill">
      <OfsxW6M9QnxKizLlRwAlkdqxESvg />
    </div>
  );
}

function ImageLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Image → Logo">
      <OfsxW6M9QnxKizLlRwAlkdqxESvgFill />
    </div>
  );
}

function LinkLogoDefault() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center relative shrink-0 w-[203px]" data-name="Link - Logo Default">
      <ImageLogo />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkLogoDefault />
    </div>
  );
}

function LogoBox() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Logo Box">
      <Container108 />
    </div>
  );
}

function OurLicensedPlumbersDeliverFastReliableAndAffordableService() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.61px] relative shrink-0 w-full" data-name="Our licensed plumbers deliver fast, reliable, and affordable service.">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[30.4px] not-italic relative shrink-0 text-[#54504d] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Protect your home with the highest `}</p>
        <p>quality roofing services.</p>
      </div>
    </div>
  );
}

function TitleAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[16.2px] items-start relative shrink-0 w-full" data-name="Title and Text">
      <LogoBox />
      <OurLicensedPlumbersDeliverFastReliableAndAffordableService />
    </div>
  );
}

function Component5IcERlzvurI1TwAiL8IugsKeAgSvg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="5icERlzvurI1TwAiL8iugsKeAg.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="5icERlzvurI1TwAiL8iugsKeAg.svg">
          <path d={svgPaths.p81f3e80} fill="var(--fill-0, #160C00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5IcERlzvurI1TwAiL8IugsKeAgSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="5icERlzvurI1TwAiL8iugsKeAg.svg fill">
      <Component5IcERlzvurI1TwAiL8IugsKeAgSvg />
    </div>
  );
}

function LinkFooterSocialIconSvgSocialIcon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Link - Footer Social → Icon Svg → Social Icon">
      <Component5IcERlzvurI1TwAiL8IugsKeAgSvgFill />
    </div>
  );
}

function Twitter() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Twitter">
      <LinkFooterSocialIconSvgSocialIcon />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[0_0.06%_0.02%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px]" data-name="Group" style={{ maskImage: `url('${imgGroup8}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.988 19.996">
        <g id="Group">
          <path d={svgPaths.p3bafc100} fill="var(--fill-0, #160C00)" id="Vector" />
          <path d={svgPaths.p29107900} fill="var(--fill-0, #160C00)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function PF9Tl56PJdtDeD0Omyk3JSdYSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="pF9Tl56pJdtDeD0Omyk3JSdY.svg">
      <ClipPathGroup10 />
    </div>
  );
}

function PF9Tl56PJdtDeD0Omyk3JSdYSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="pF9Tl56pJdtDeD0Omyk3JSdY.svg fill">
      <PF9Tl56PJdtDeD0Omyk3JSdYSvg />
    </div>
  );
}

function LinkFooterSocialIconSvgSocialIcon1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Link - Footer Social → Icon Svg → Social Icon">
      <PF9Tl56PJdtDeD0Omyk3JSdYSvgFill />
    </div>
  );
}

function Instagram() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Instagram">
      <LinkFooterSocialIconSvgSocialIcon1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px]" data-name="Group" style={{ maskImage: `url('${imgGroup8}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p35256e00} fill="var(--fill-0, #160C00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function LhyuzJigNzhKtEVvi4Dh7E8RaSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="lhyuzJIGNzhKtEVvi4DH7e8RA.svg">
      <ClipPathGroup11 />
    </div>
  );
}

function LhyuzJigNzhKtEVvi4Dh7E8RaSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="lhyuzJIGNzhKtEVvi4DH7e8RA.svg fill">
      <LhyuzJigNzhKtEVvi4Dh7E8RaSvg />
    </div>
  );
}

function LinkFooterSocialIconSvgSocialIcon2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Link - Footer Social → Icon Svg → Social Icon">
      <LhyuzJigNzhKtEVvi4Dh7E8RaSvgFill />
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Linked In">
      <LinkFooterSocialIconSvgSocialIcon2 />
    </div>
  );
}

function G5DFTs8HuouuO5YemI0BoRpOZl8Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="G5dFTs8huouuO5YemI0boRpOZl8.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="G5dFTs8huouuO5YemI0boRpOZl8.svg">
          <path d={svgPaths.pa8d7b00} fill="var(--fill-0, #160C00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G5DFTs8HuouuO5YemI0BoRpOZl8SvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="G5dFTs8huouuO5YemI0boRpOZl8.svg fill">
      <G5DFTs8HuouuO5YemI0BoRpOZl8Svg />
    </div>
  );
}

function LinkFooterSocialIconSvgSocialIcon3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Link - Footer Social → Icon Svg → Social Icon">
      <G5DFTs8HuouuO5YemI0BoRpOZl8SvgFill />
    </div>
  );
}

function Threads() {
  return (
    <div className="aspect-[20/20] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Threads">
      <LinkFooterSocialIconSvgSocialIcon3 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Social Icons">
      <Twitter />
      <Instagram />
      <LinkedIn />
      <Threads />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 top-0 w-[297px]" data-name="Left Content">
      <TitleAndText />
      <SocialIcons />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">Navigation</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0" data-name="Container">
      <Container110 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Home</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container113 />
    </div>
  );
}

function LinkFooterMenu() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container112 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Services</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container116 />
    </div>
  );
}

function LinkFooterMenu1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container115 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu1 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Company</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container119 />
    </div>
  );
}

function LinkFooterMenu2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container118 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu2 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Review</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container122 />
    </div>
  );
}

function LinkFooterMenu3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container121 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu3 />
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start justify-center relative shrink-0" data-name="Menu Items">
      <Container111 />
      <Container114 />
      <Container117 />
      <Container120 />
    </div>
  );
}

function MenuList() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0" data-name="Menu List">
      <Container109 />
      <MenuItems />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">Services</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0" data-name="Container">
      <Container124 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Roof Installation</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container128 />
    </div>
  );
}

function LinkFooterMenu4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container127 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu4 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Roof Inspection</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container131 />
    </div>
  );
}

function LinkFooterMenu5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container130 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu5 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Flat Roofing</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container134 />
    </div>
  );
}

function LinkFooterMenu6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container133 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu6 />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Gutter Installation</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container137 />
    </div>
  );
}

function LinkFooterMenu7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container136 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu7 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start justify-center relative shrink-0" data-name="Container">
      <Container126 />
      <Container129 />
      <Container132 />
      <Container135 />
    </div>
  );
}

function MenuItems1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Menu Items">
      <Container125 />
    </div>
  );
}

function MenuList1() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0" data-name="Menu List">
      <Container123 />
      <MenuItems1 />
    </div>
  );
}

function CenterMenus() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[35.27%] right-[29.73%] top-[-1px]" data-name="Center Menus">
      <MenuList />
      <MenuList1 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[0_0_0.05%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.002px_0px] mask-size-[88px_99px]" data-name="Group" style={{ maskImage: `url('${imgGroup9}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.9993 98.9496">
        <g id="Group">
          <path d={svgPaths.p21e29900} fill="var(--fill-0, #F3F3F3)" id="Vector" />
          <path d={svgPaths.p3d1a0a00} fill="var(--fill-0, #161616)" id="Vector_2" />
          <path d={svgPaths.p1d84bc80} fill="var(--fill-0, #25252F)" id="Vector_3" />
          <path d={svgPaths.p3e3ab900} fill="var(--fill-0, #161616)" id="Vector_4" />
          <path d={svgPaths.p108d67c0} fill="var(--fill-0, #F3F3F3)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group12 />
    </div>
  );
}

function Tm6CHgaUIjlQ9Okq8VhErpeXJy4Svg() {
  return (
    <div className="h-[99px] overflow-clip relative shrink-0 w-[88px]" data-name="TM6cHgaUIjlQ9OKQ8vhErpeXJy4.svg">
      <ClipPathGroup12 />
    </div>
  );
}

function Tm6CHgaUIjlQ9Okq8VhErpeXJy4SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[99px] items-center justify-center overflow-clip relative shrink-0 w-[88px]" data-name="TM6cHgaUIjlQ9OKQ8vhErpeXJy4.svg fill">
      <Tm6CHgaUIjlQ9Okq8VhErpeXJy4Svg />
    </div>
  );
}

function AchievementImage() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Achievement Image">
      <Tm6CHgaUIjlQ9Okq8VhErpeXJy4SvgFill />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[99px] relative shrink-0 w-[88px]" data-name="image 1">
      <AchievementImage />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[0_0.52%_0.03%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[88px_135px]" data-name="Group" style={{ maskImage: `url('${imgGroup10}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.539 134.959">
        <g id="Group">
          <path d={svgPaths.p4782570} fill="var(--fill-0, #F3F3F3)" id="Vector" />
          <path d={svgPaths.p1cb9cf00} fill="var(--fill-0, #161616)" id="Vector_2" />
          <path d={svgPaths.p5141180} fill="var(--fill-0, #161616)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function I9BQarl57KlBnZaLacm9Ww8L3BqSvg() {
  return (
    <div className="h-[135px] overflow-clip relative shrink-0 w-[88px]" data-name="i9bQarl57klBnZaLacm9Ww8L3BQ.svg">
      <ClipPathGroup13 />
    </div>
  );
}

function I9BQarl57KlBnZaLacm9Ww8L3BqSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[135px] items-center justify-center overflow-clip relative shrink-0 w-[88px]" data-name="i9bQarl57klBnZaLacm9Ww8L3BQ.svg fill">
      <I9BQarl57KlBnZaLacm9Ww8L3BqSvg />
    </div>
  );
}

function AchievementImage1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Achievement Image">
      <I9BQarl57KlBnZaLacm9Ww8L3BqSvgFill />
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[135px] relative shrink-0 w-[88px]" data-name="image 2">
      <AchievementImage1 />
    </div>
  );
}

function Certification() {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-start left-[1096px] top-0" data-name="Certification">
      <Image6 />
      <Image7 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[206.83px] relative shrink-0 w-full" data-name="Main Content">
      <LeftContent />
      <CenterMenus />
      <Certification />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54504d] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">© 2025 RoofShield - All Right Reserved</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container139 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Contact</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container142 />
    </div>
  );
}

function LinkFooterMenu8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container141 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu8 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[16px] whitespace-nowrap">
        <p className="leading-[30.4px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container145 />
    </div>
  );
}

function LinkFooterMenu9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Footer Menu">
      <Container144 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkFooterMenu9 />
    </div>
  );
}

function BottomMenu() {
  return (
    <div className="content-stretch flex gap-[32.01px] items-center justify-center relative shrink-0" data-name="Bottom Menu">
      <Container140 />
      <Container143 />
    </div>
  );
}

function BottomContent() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[15px] relative shrink-0 w-full" data-name="Bottom content">
      <Container138 />
      <BottomMenu />
      <div aria-hidden="true" className="absolute border-[rgba(84,80,77,0.5)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[99.99px] items-center justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <MainContent />
      <BottomContent />
    </div>
  );
}

function FooterDesktop1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 overflow-clip pb-[90px] pt-[105px] px-[60px] right-0 top-[8755.16px]" data-name="Footer - Desktop">
      <Container107 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[0_81.28%_0_0.49%] mask-position-[-1px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgGroup6}'), url('${imgGroup7}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 41">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pf3cb200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p318cec00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pa2728c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup15() {
  return (
    <div className="absolute contents inset-[0_81.28%_0_0.49%]" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0_1.52%_0_0.49%]" data-name="Group">
      <div className="absolute inset-[31.61%_1.52%_11.26%_25.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-51.792px_-12.96px] mask-size-[203px_41px]" data-name="Vector" style={{ maskImage: `url('${imgGroup6}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.126 23.424">
          <path d={svgPaths.p3ef4ca00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup15 />
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function LlZw1GwhfjitiYk5Pr1SwClk6MSvg() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-[203px]" data-name="LlZw1GwhfjitiYk5PR1SWClk6M.svg">
      <ClipPathGroup14 />
    </div>
  );
}

function LlZw1GwhfjitiYk5Pr1SwClk6MSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start justify-center overflow-clip py-[0.5px] relative shrink-0 w-[203px]" data-name="LlZw1GwhfjitiYk5PR1SWClk6M.svg fill">
      <LlZw1GwhfjitiYk5Pr1SwClk6MSvg />
    </div>
  );
}

function ImageLogo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Image → Logo">
      <LlZw1GwhfjitiYk5Pr1SwClk6MSvgFill />
    </div>
  );
}

function LinkLogoDefault1() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center relative shrink-0 w-[203px]" data-name="Link - Logo Default">
      <ImageLogo1 />
    </div>
  );
}

function LogoBox1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo Box">
      <LinkLogoDefault1 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">All Pages</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container148 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function LinkMenuWhite() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Menu White">
      <Container147 />
      <Container149 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkMenuWhite />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">Services</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container152 />
    </div>
  );
}

function LinkMenuWhite1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Menu White">
      <Container151 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkMenuWhite1 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">Contact</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container155 />
    </div>
  );
}

function LinkMenuWhite2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Menu White">
      <Container154 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkMenuWhite2 />
    </div>
  );
}

function MainMenu() {
  return (
    <div className="content-stretch flex gap-[30px] items-center justify-center relative rounded-[16px] shrink-0" data-name="Main Menu">
      <Container146 />
      <Container150 />
      <Container153 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Request a Consultation</p>
      </div>
    </div>
  );
}

function GetInTouch5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container156 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="h-[22px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.92px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 1.83333">
            <path d="M0.916667 0.916667H13.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 14.6667">
            <path d={svgPaths.p19508150} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[22px] top-[2px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function IconBox11() {
  return (
    <div className="overflow-clip relative rounded-[6px] shrink-0 size-[26px]" data-name="Icon Box 02">
      <Container157 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center pb-[10px] pt-[9px] px-[16px] relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch5 />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <IconBox11 />
    </div>
  );
}

function LinkButtonBorder1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Button Border">
      <Content18 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <LinkButtonBorder1 />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Header Button">
      <Button />
    </div>
  );
}

function ContainerNavBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[16px] shrink-0 w-full" data-name="Container → Nav Bar">
      <LogoBox1 />
      <MainMenu />
      <HeaderButton />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="absolute backdrop-blur-[0px] bg-[#160c00] content-stretch flex flex-col items-center justify-center left-0 min-w-[1440px] px-[60px] py-[25px] right-0 top-[42.41px]" data-name="Header - Desktop">
      <ContainerNavBar />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[9303.39px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <SectionDesktop />
      <HeroSection />
      <BrandSection />
      <AboutSectionSection />
      <ServiceSection />
      <HowItWorksSection />
      <ProjectsSection />
      <FeaturesSection />
      <TestimonialSection />
      <InsightSection />
      <FaqSection />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[8755.16px]" data-name="Rectangle" />
      <FooterDesktop1 />
      <HeaderDesktop />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1440w light">
      <RemoveThisBuyPromo />
      <Container11 />
      <EndOfBodyStart />
    </div>
  );
}