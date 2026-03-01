import { Star } from 'lucide-react';
import type { Review } from '../../types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-navy-800 rounded-2xl p-6 flex flex-col gap-4 border border-navy-700">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-solar-400 fill-solar-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-200 text-sm leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-solar-500/20 rounded-full flex items-center justify-center text-solar-400 font-bold text-sm">
            {review.name.charAt(0)}
          </div>
          <span className="text-white font-medium text-sm">{review.name}</span>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
          review.source === 'Google'
            ? 'bg-white/10 text-slate-300'
            : 'bg-blue-500/20 text-blue-300'
        }`}>
          {review.source}
        </span>
      </div>
    </div>
  );
}
