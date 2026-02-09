"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import axios from "axios";

/* ---------- TYPES ---------- */

export interface userItem {
    _id: string;
    fullName: string;
    email: string;
}

export interface Review {
  _id: string;
  service: string;
  rating: number;
  comment: string;
  user: userItem;
  createdAt?: string;
  updatedAt?: string;
}

export type RatingDistribution = {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};


export interface ReviewsService {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: RatingDistribution;
  reviews: Review[];
}


/* ---------- CONTEXT TYPE ---------- */

interface ReviewServiceContextType {
    reviewServices: ReviewsService | null;
    loading: boolean;
    error: string | null;
    fetchReviews: (moduleId: string) => Promise<void>;
}

/* ---------- CONTEXT ---------- */

const ReviewServiceContext = createContext<ReviewServiceContextType | undefined>(
    undefined
);

/* ---------- HOOK ---------- */

export const useReview = () => {
    const context = useContext(ReviewServiceContext);
    if (!context) {
        throw new Error(
            "useReview must be used within ReviewProvider"
        );
    }
    return context;
};

/* ---------- PROVIDER ---------- */

interface Props {
    children: ReactNode;
}

export const ReviewProvider = ({ children }: Props) => {
    const [reviewServices, setReviewServices] = useState<ReviewsService | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchReviews = async (service_id: string) => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(
                `https://api.fetchtrue.com/api/service/review/${service_id}`
            );

            if (res.data?.success) {
                setReviewServices(res.data);
            } else {
                setError("Failed to fetch review services");
            }
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

    return (
        <ReviewServiceContext.Provider
            value={{ reviewServices, loading, error, fetchReviews }}
        >
            {children}
        </ReviewServiceContext.Provider>
    );
};
