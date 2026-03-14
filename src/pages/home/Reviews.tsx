import { Star, ThumbsUp } from 'lucide-react';
import ReviewCard from '../../components/ui/ReviewCard';
import { reviews } from '../../data/reviews';

export default function Reviews() {
  // Split the 10 reviews into two rows of 5
  const topReviews = reviews.slice(0, 5);
  const bottomReviews = reviews.slice(5, 10);

  return (
    <section id="reviews" className="py-20 bg-navy-900">
      {/* Custom Keyframes for Marquee */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      {/* SINGLE UNIFIED CONTAINER - Restricts everything to max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-solar-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Customer Reviews
          </span>
          <h2
            className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What Our <span className="text-solar-400">Customers</span> Say
          </h2>

          {/* Overall Rating Badge */}
          <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-4 bg-navy-800 border border-navy-700 rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-solar-400 fill-solar-400" />
              ))}
            </div>
            <div className="border-l border-navy-600 pl-4 text-left">
              <div className="text-white font-black text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                100%
              </div>
              <div className="text-slate-400 text-xs">Recommend Rate</div>
            </div>
            <div className="border-l border-navy-600 pl-4 flex items-center gap-2">
              <ThumbsUp size={18} className="text-green-eco" />
              <div>
                <div className="text-white font-bold text-lg">10</div>
                <div className="text-slate-400 text-xs">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Section (Now constrained within max-w-7xl) */}
        {/* Added overflow-hidden and a nice edge fade mask */}
        <div className="group/wall flex flex-col gap-6 w-full mb-12 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          
          {/* Row 1: Scrolling Left */}
          <div className="flex w-max relative z-[1] py-4 -my-4 transition-[z-index] duration-0 hover:z-50 group-hover/wall:[animation-play-state:paused] animate-[scroll-left_40s_linear_infinite]">
            {/* Original 5 Cards */}
            <div className="flex gap-6 pr-6">
              {topReviews.map((review) => (
                <div key={review.id} className="w-[280px] sm:w-[350px] shrink-0 transition-transform duration-300 hover:-translate-y-2">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
            {/* Duplicated 5 Cards */}
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {topReviews.map((review) => (
                <div key={`dup-${review.id}`} className="w-[280px] sm:w-[350px] shrink-0 transition-transform duration-300 hover:-translate-y-2">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-max relative z-[1] py-4 -my-4 transition-[z-index] duration-0 hover:z-50 group-hover/wall:[animation-play-state:paused] animate-[scroll-right_40s_linear_infinite]">
            {/* Original 5 Cards */}
            <div className="flex gap-6 pr-6">
              {bottomReviews.map((review) => (
                <div key={review.id} className="w-[280px] sm:w-[350px] shrink-0 transition-transform duration-300 hover:-translate-y-2">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
            {/* Duplicated 5 Cards */}
            <div className="flex gap-6 pr-6" aria-hidden="true">
              {bottomReviews.map((review) => (
                <div key={`dup-${review.id}`} className="w-[280px] sm:w-[350px] shrink-0 transition-transform duration-300 hover:-translate-y-2">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="https://www.facebook.com/jmcsolar/reviews/?id=100063736463795&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-solar-400 transition-colors text-sm"
          >
            <span>See all reviews on Facebook</span>
            <span className="text-solar-500">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}