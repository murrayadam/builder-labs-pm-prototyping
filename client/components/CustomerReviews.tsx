import { Star, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerReview } from "@/data/reviewData";

interface CustomerReviewsProps {
  reviews: CustomerReview[];
  restaurantName: string;
}

export default function CustomerReviews({ reviews, restaurantName }: CustomerReviewsProps) {
  if (reviews.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        <div className="text-center py-8 text-gray-500">
          <p>No reviews yet for {restaurantName}</p>
          <p className="text-sm">Be the first to leave a review!</p>
        </div>
      </div>
    );
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalHelpful = reviews.reduce((sum, review) => sum + review.helpfulCount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-lg">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({reviews.length} reviews)</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm">{totalHelpful} helpful</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="font-medium text-gray-700">
                      {review.customerName.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900">{review.customerName}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 leading-relaxed">
                {review.comment}
              </p>
              
              <div className="flex items-center gap-2 text-gray-500">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">
                  {review.helpfulCount} people found this helpful
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <Button variant="outline" className="px-6">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}
