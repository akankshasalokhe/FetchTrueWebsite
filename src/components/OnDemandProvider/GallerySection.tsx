"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type props = {
    providerId: string;
}

export default function GallerySection({ providerId }: props) {
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
       
        if (!providerId) {
            setLoading(false);
            return;
        }

        const fetchGalleryImages = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://api.fetchtrue.com/api/provider/${providerId}/gallery`
                );
                // Access the galleryImages array from response.data
                setGalleryImages(response.data?.galleryImages || []);
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

        fetchGalleryImages();
    }, [providerId]); 

    if (loading) return <div>Loading gallery...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!galleryImages.length) return <div>No gallery images available</div>

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border">
                    <img 
                        src={image} 
                        alt={`Gallery ${index + 1}`} 
                        className="lg:w-full lg:h-[230px] object-fit w-full h-full"
                    />
                </div>
            ))}
        </div>
    );
}