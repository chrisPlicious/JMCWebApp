import { Star, ThumbsUp } from 'lucide-react';
import ReviewCard from '../../components/ui/ReviewCard';
import { reviews } from '../../data/reviews';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-solar-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Customer Reviews
          </span>
          <h2
            className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What Our{' '}
            <span className="text-solar-400">Customers</span> Say
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
                <div className="text-white font-bold text-lg">7</div>
                <div className="text-slate-400 text-xs">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* CTA to Facebook */}
        <div className="text-center">
          <a
            href="https://www.facebook.com/JMCSolarPH"
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
