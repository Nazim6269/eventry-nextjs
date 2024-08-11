import { getBlurImage } from '@/utils/blurImage';
import Image from 'next/image';
import ActionButtons from '../ActionsButton';

const Hero = async ({ event }) => {
  const { base64 } = await getBlurImage(event?.imageUrl);
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={event?.imageUrl}
          alt={event?.name}
          className="h-[450px] mx-auto"
          width={900}
          height={900}
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{event?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{event?.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{event?.interested_ids?.length} Interested</span>
            <span>|</span>
            <span>{event?.going_ids?.length} Going</span>
          </div>
        </div>

        <div className="w-full flex gap-4 mt-4 flex-1 ">
          <ActionButtons
            eventId={event?.id}
            interestedUserIds={event?.interested_ids}
            goingUserIds={event?.going_ids}
            fromDetails={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
