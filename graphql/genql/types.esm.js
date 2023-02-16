export default {
    "scalars": [
        1,
        2,
        3
    ],
    "types": {
        "Article": {
            "comments": [
                4
            ],
            "id": [
                1
            ],
            "nsfw": [
                2
            ],
            "title": [
                3
            ],
            "url": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ID": {},
        "Boolean": {},
        "String": {},
        "Comment": {
            "id": [
                1
            ],
            "text": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Mutation": {
            "addComment": [
                4,
                {
                    "articleID": [
                        3,
                        "String!"
                    ],
                    "text": [
                        3,
                        "String!"
                    ]
                }
            ],
            "createArticle": [
                0,
                {
                    "nsfw": [
                        2
                    ],
                    "title": [
                        3,
                        "String!"
                    ],
                    "url": [
                        3,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "Query": {
            "article": [
                0,
                {
                    "articleID": [
                        3,
                        "String!"
                    ]
                }
            ],
            "articles": [
                0
            ],
            "__typename": [
                3
            ]
        }
    }
}