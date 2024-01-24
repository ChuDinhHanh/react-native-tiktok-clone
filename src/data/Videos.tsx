export const Videos = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus aliquid autem sint reprehenderit aut dolor. Facilis veritatis, maxime libero illum non atque dolores iure quasi quod voluptates placeat fugiat.",
        user: {
            uid: 1,
            avatar: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
            name: "Nguyen Van A",
            isOfficial: true
        },
        video: require('../assets/videos/v9.mp4'),
        isLiked: true,
        likeQty: 150,
        isFavorite: false,
        favoriteQty: 10,
        shareQty: 5,
        isOfficial: false,
        tags: [
            { id: 1, name: "#BongDa" },
            { id: 2, name: "#Messi" }
        ],
        comments: [
            {
                id: 1,
                uid: 1,
                videoId: 2,
                comments: "Great video",
                children: [],
                parentId: null
            },
            {
                id: 2,
                uid: 2,
                videoId: 2,
                comments: "This video is so good",
                children: [
                    {
                        id: 3,
                        uid: 3,
                        videoId: 2,
                        comments: "Me too!",
                        children: [],
                        parentId: 2
                    },
                    {
                        id: 4,
                        uid: 2,
                        videoId: 2,
                        comments: "Thk u :)",
                        children: [],
                        parentId: 2
                    },
                ],
                parentId: null
            },
            {
                id: 5,
                uid: 4,
                videoId: 2,
                comments: "Not good",
                children: [],
                parentId: null
            },
        ]
    },
    {
        id: 2,
        title: "My first video2",
        user: {
            uid: 2,
            avatar: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
            name: "Nguyen Van A",
            isOfficial: false
        },
        video: require('../assets/videos/v1.mp4'),
        isLiked: true,
        likeQty: 150,
        isFavorite: false,
        favoriteQty: 10,
        shareQty: 5,
        isOfficial: false,
        tags: [
            { id: 1, name: "#BongDa" },
            { id: 2, name: "#Messi" }
        ],
        comments: [
            {
                id: 1,
                uid: 1,
                videoId: 2,
                comments: "Great video",
                children: [],
                parentId: null
            },
            {
                id: 2,
                uid: 2,
                videoId: 2,
                comments: "This video is so good",
                children: [
                    {
                        id: 3,
                        uid: 3,
                        videoId: 2,
                        comments: "Me too!",
                        children: [],
                        parentId: 2
                    },
                    {
                        id: 4,
                        uid: 2,
                        videoId: 2,
                        comments: "Thk u :)",
                        children: [],
                        parentId: 2
                    },
                ],
                parentId: null
            },
            {
                id: 5,
                uid: 4,
                videoId: 2,
                comments: "Not good",
                children: [],
                parentId: null
            },
        ]
    },
    {
        id: 3,
        title: "My first video2",
        user: {
            uid: 1,
            avatar: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
            name: "Nguyen Van A",
            isOfficial: false
        },
        video: require('../assets/videos/v7.mp4'),
        isLiked: true,
        likeQty: 150,
        isFavorite: false,
        favoriteQty: 10,
        shareQty: 5,
        isOfficial: false,
        tags: [
            { id: 1, name: "#BongDa" },
            { id: 2, name: "#Messi" }
        ],
        comments: [
            {
                id: 1,
                uid: 1,
                videoId: 2,
                comments: "Great video",
                children: [],
                parentId: null
            },
            {
                id: 2,
                uid: 2,
                videoId: 2,
                comments: "This video is so good",
                children: [
                    {
                        id: 3,
                        uid: 3,
                        videoId: 2,
                        comments: "Me too!",
                        children: [],
                        parentId: 2
                    },
                    {
                        id: 4,
                        uid: 2,
                        videoId: 2,
                        comments: "Thk u :)",
                        children: [],
                        parentId: 2
                    },
                ],
                parentId: null
            },
            {
                id: 5,
                uid: 4,
                videoId: 2,
                comments: "Not good",
                children: [],
                parentId: null
            },
        ]
    },
    {
        id: 4,
        title: "My first video2",
        user: {
            uid: 1,
            avatar: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg",
            name: "Nguyen Van A",
            isOfficial: true
        },
        video: require('../assets/videos/v8.mp4'),
        isLiked: true,
        likeQty: 150,
        isFavorite: false,
        favoriteQty: 10,
        shareQty: 5,
        isOfficial: false,
        tags: [
            { id: 1, name: "#BongDa" },
            { id: 2, name: "#Messi" }
        ],
        comments: [
            {
                id: 1,
                uid: 1,
                videoId: 2,
                comments: "Great video",
                children: [],
                parentId: null
            },
            {
                id: 2,
                uid: 2,
                videoId: 2,
                comments: "This video is so good",
                children: [
                    {
                        id: 3,
                        uid: 3,
                        videoId: 2,
                        comments: "Me too!",
                        children: [],
                        parentId: 2
                    },
                    {
                        id: 4,
                        uid: 2,
                        videoId: 2,
                        comments: "Thk u :)",
                        children: [],
                        parentId: 2
                    },
                ],
                parentId: null
            },
            {
                id: 5,
                uid: 4,
                videoId: 2,
                comments: "Not good",
                children: [],
                parentId: null
            },
        ]
    }
]