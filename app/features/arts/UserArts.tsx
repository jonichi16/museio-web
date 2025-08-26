import React, { useState, useEffect } from "react";

interface Art {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

interface ApiResponse {
  success: boolean;
  code: number;
  message: string;
  data: {
    arts: Art[];
    pagination: {
      size: number;
      page: number;
      totalElements: number;
      totalPages: number;
    };
  };
  timestamp: string;
}

export const UserArts: React.FC = () => {
  const [arts, setArts] = useState<Art[]>([]);

  // Hardcoded response (mock backend data)
  const mockResponse: ApiResponse = {
    success: true,
    code: 200,
    message: "Arts retrieved successfully",
    data: {
      arts: [
        {
          id: 1,
          title: "Sample Title",
          description: "Sample Description",
          tags: ["tag1", "tag2"],
          imageUrl:
            "https://media.makeameme.org/created/it-works-it-5bff9f.jpg",
        },
        {
          id: 2,
          title: "Sunset Painting",
          description: "A beautiful sunset over the mountains.",
          tags: ["sunset", "painting", "nature"],
          imageUrl:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        },
        {
          id: 3,
          title: "Night Shift",
          description: "Night Shift stuffs",
          tags: ["night", "shift", "work-related"],
          imageUrl:
            "https://preview.redd.it/unironically-im-27-been-working-night-shift-for-almost-5yrs-v0-e5ovmkckk8ce1.jpeg?auto=webp&s=9da2deb868b84cdaa4c95bcc1ca1dd17ed4a29e2",
        },
      ],
      pagination: {
        size: 10,
        page: 1,
        totalElements: 43,
        totalPages: 5,
      },
    },
    timestamp: "2025-05-18T04:23:14.787171069Z",
  };

  useEffect(() => {
    setArts(mockResponse.data.arts);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">List of Art</h2>
      {arts.length === 0 ? (
        <p>No arts found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arts.map((art) => (
            <li
              key={art.id}
              //   className="border rounded-lg shadow p-4 space-y-2 bg-white" -- DEFAULT PROVIDED. BUT WILL EXPERIMENT WITH THE DESIGN ON FIGMA
            >
              <img src={art.imageUrl} alt={art.title} />
              <h3 className="font-semibold text-lg text-center">{art.title}</h3>
              {/* <p className="text-gray-600 text-sm">{art.description}</p>
              <div className="flex flex-wrap gap-2">
                {art.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 px-2 py-1 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div> -- WILL COMMENT OUT FOR NOW. FOLLOW THE DESIGN ON FIGMA AS CLOSE AS POSSIBLE */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
