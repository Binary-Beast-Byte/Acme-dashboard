import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <img className='w-20' src="https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png" alt="" />
      <p className="text-[44px] text-orange-200">Ace</p>
    </div>
  );
}
