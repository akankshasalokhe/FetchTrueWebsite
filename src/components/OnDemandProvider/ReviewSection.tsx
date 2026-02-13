"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type props = {
    providerId: string;
}

type reviewData = {
    _id: string,
    user: string,
    provider: string,
    rating: number,
    comment: string
}

type ProviderData = {
    averageRating: number;
    totalReviews: number;
    reviews: reviewData[]
};

export default function ReviewSection({ providerId }: props) {
    const [reviewData, setReviewData] = useState<ProviderData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!providerId) {
            setLoading(false);
            return;
        }

        const fetchProviderData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://api.fetchtrue.com/api/provider/review/${providerId}`
                );
                setReviewData(response.data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProviderData();
    }, [providerId]);

    if (loading) {
        return (
            <div className="space-y-6 animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-5 bg-gray-200 rounded w-40"></div>
                    <div className="h-5 bg-gray-200 rounded w-40"></div>
                    <div className="h-5 bg-gray-200 rounded w-40"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">Error loading about data: {error}</p>
            </div>
        );
    }

    if (!reviewData) {
        return (
            <div className="p-8 text-center text-gray-500">
                No review data available
            </div>
        );
    }

    return (
        <div className="w-full space-y-6">

            {/* ===== Header ===== */}
            <div>
                <h2 className="text-xl font-semibold">Customer Reviews</h2>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-1 text-sm text-gray-600">
                    <div>
                        <span className="flex items-center gap-1">
                            ⭐ {reviewData.averageRating} out of 5
                        </span>
                    </div>

                    <div>
                        <span>•</span>
                        <span className="ml-2">Based on {reviewData.totalReviews} verified bookings</span>
                    </div>
                </div>
            </div>

            {/* ===== Reviews Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {reviewData.reviews.map((review) => (
                    <div
                        key={review._id}
                        className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition"
                    >
                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
                                {review.user?.charAt(0).toUpperCase()}
                                <img src="/image/reviewcontact.jpg" alt="reviewer" className="" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold leading-tight">
                                    {review.user || "User"}
                                </p>

                            </div>
                        </div>

                        {/* Comment */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            {review.comment}
                        </p>

                        {/* Stars */}
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`text-lg ${star <= review.rating
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );


}