import { Play } from "lucide-react";

/*  MOCK DATA  */
const partnerReviews = [
    {
        id: 1,
        name: "Akshay Yadav",
        role: "Growth Partners",
        description:
            "Many mention supportive teams, collaborative environments, clear direction, and a focus on well-being and work-life balance.",
        rating: 5,
        thumbnail: "/image/partnerreviewcard.jpg",
        profile: "/image/partnerreviewprofile.jpg"
    },
    {
        id: 2,
        name: "Akshay Yadav",
        role: "Growth Partners",
        description:
            "Many mention supportive teams, collaborative environments, clear direction, and a focus on well-being and work-life balance.",
        rating: 5,
        thumbnail: "/image/partnerreviewcard.jpg",
        profile: "/image/partnerreviewprofile.jpg"
    },
    {
        id: 3,
        name: "Akshay Yadav",
        role: "Growth Partners",
        description:
            "Many mention supportive teams, collaborative environments, clear direction, and a focus on well-being and work-life balance.",
        rating: 5,
        thumbnail: "/image/partnerreviewcard.jpg",
        profile: "/image/partnerreviewprofile.jpg"
    },
];

/* ===== SINGLE CARD ===== */
function PartnerReviewCard({ data }: { data: typeof partnerReviews[number] }) {
    return (
        <div className="lg:w-[324px] md:w-[250px] w-[250px] mb-4 bg-white rounded-xl shadow-sm shrink-0 scrollbar-hide">
            {/* Thumbnail */}
            <div className="relative">
                <img
                    src={data.thumbnail}
                    alt={data.name}
                    className="w-full h-[180px] object-cover rounded-t-xl"
                />
                <button className="absolute top-3 left-3 bg-black/70 p-2 rounded-full">
                    <Play className="w-4 h-4 text-white" />
                </button>
                <img src={data.profile} alt="profile" className="absolute bottom-5 left-3 w-[30px] h-[30px] object-fit rounded-full" />
              
                    <h3 className="absolute bottom-8 left-14 text-white text-[12px] lg:text-[20px]">{data.name}</h3>
                    <p className="absolute bottom-1 left-14 text-[12px] lg:text-[20px] text-white mb-2">{data.role}</p>
               
            </div>

            {/* Content */}
            <div className="p-4">


                <p className="lg:text-[16px] text-[10px] text-gray-600 line-clamp-3 mb-3">
                    {data.description}
                </p>

                <div className="flex gap-1">
                    {Array.from({ length: data.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ===== LIST / SECTION ===== */
export default function PartnersReview() {
    return (
        <section className="lg:w-[1400px] md:w-[700px] w-[300px] mx-auto">
            <h2 className="mb-4 lg:text-[24px] font-semibold">Partners Review</h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                {partnerReviews.map((item) => (
                    <PartnerReviewCard key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
}
