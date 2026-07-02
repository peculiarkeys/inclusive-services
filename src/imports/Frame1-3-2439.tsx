import svgPaths from "./svg-85bzleidrq";
import imgHeroSection from "local:asset/9c7f9a850dcb52e471bb613bc76969646fffe4b5.png";
import { imgVector, imgGroup } from "./svg-go5a8";

function Group1() {
  return (
    <div className="absolute inset-[0_81.28%_0_0.49%] mask-position-[-1px_0px,_0px_0px]" data-name="Group" style={{ maskImage: `url('${imgVector}'), url('${imgGroup}')` }}>
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

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_81.28%_0_0.49%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_1.52%_0_0.49%]" data-name="Group">
      <div className="absolute inset-[31.61%_1.52%_11.26%_25.51%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-51.792px_-12.96px] mask-size-[203px_41px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.126 23.424">
          <path d={svgPaths.p3ef4ca00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup1 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function LlZw1GwhfjitiYk5Pr1SwClk6MSvg() {
  return (
    <div className="h-[41px] overflow-clip relative shrink-0 w-[203px]" data-name="LlZw1GwhfjitiYk5PR1SWClk6M.svg">
      <ClipPathGroup />
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

function ImageLogo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Image → Logo">
      <LlZw1GwhfjitiYk5Pr1SwClk6MSvgFill />
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

function LogoBox() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo Box">
      <LinkLogoDefault />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">All Pages</p>
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

function Svg() {
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg />
    </div>
  );
}

function LinkMenuWhite() {
  return (
    <div className="content-stretch flex gap-[6.01px] items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Menu White">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkMenuWhite />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">Services</p>
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

function LinkMenuWhite1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Menu White">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkMenuWhite1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[28.8px]">Contact</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function LinkMenuWhite2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[10px] shrink-0" data-name="Link - Menu White">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkMenuWhite2 />
    </div>
  );
}

function MainMenu() {
  return (
    <div className="content-stretch flex gap-[30px] items-center justify-center relative rounded-[16px] shrink-0" data-name="Main Menu">
      <Container />
      <Container4 />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Request a Consultation</p>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Get In Touch">
      <Container10 />
    </div>
  );
}

function Svg1() {
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

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[2px] size-[22px] top-[2px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function IconBox() {
  return (
    <div className="overflow-clip relative rounded-[6px] shrink-0 size-[26px]" data-name="Icon Box 02">
      <Container11 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center pb-[10px] pt-[9px] px-[16px] relative rounded-[10px] shrink-0" data-name="Content">
      <GetInTouch />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <IconBox />
    </div>
  );
}

function LinkButtonBorder() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Button Border">
      <Content />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <LinkButtonBorder />
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
      <LogoBox />
      <MainMenu />
      <HeaderButton />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="backdrop-blur-[0px] bg-[#160c00] min-w-[1440px] relative shrink-0 w-full" data-name="Header - Desktop">
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[60px] py-[25px] relative w-full">
          <ContainerNavBar />
        </div>
      </div>
    </div>
  );
}

function SectionGradientOverlay() {
  return <div className="absolute inset-0" data-name="Section - Gradient Overlay" style={{ backgroundImage: "linear-gradient(251.996deg, rgba(0, 0, 0, 0) 37%, rgb(0, 0, 0) 100%)" }} />;
}

function BestRoofingServiceInTexasHeading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.605px] relative shrink-0 w-full" data-name="Best Roofing Service in Texas → Heading 1">
      <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[92.4px] relative shrink-0 text-[88px] text-white tracking-[-2.3px] w-full whitespace-pre-wrap">
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

function Heading() {
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
      <Heading />
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

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">Required Service</p>
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

function Container15() {
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
          <Container15 />
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
      <Container13 />
      <Background />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#160c00] text-[14px] whitespace-nowrap">
        <p className="leading-[25.2px]">Phone Number</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container18() {
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
          <Container18 />
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
      <Container16 />
      <Background1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[30.4px]">Request a Consultation</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container20 />
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

function Container21() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[4px]" data-name="Container">
      <ButtonIcon />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="min-h-[32px] min-w-[32px] relative rounded-[6px] shrink-0 size-[32px]" data-name="Arrow Icon">
      <Container21 />
    </div>
  );
}

function ButtonDefault() {
  return (
    <div className="bg-[#fb8500] content-stretch flex gap-[8px] items-center justify-center pb-[10px] pt-[11px] px-[16px] relative rounded-[8px] shrink-0" data-name="Button - Default">
      <Container19 />
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

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Form />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="min-w-[1440px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] pb-[86px] pt-[69.205px] px-[60px] relative w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[110.35%] left-0 max-w-none top-[-5.18%] w-full" src={imgHeroSection} />
          </div>
          <SectionGradientOverlay />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeaderDesktop />
      <HeroSection />
    </div>
  );
}