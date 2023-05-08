import profileReducer, {addPostAC, deletePost, ProfilePageType} from "./profile-reducer";

describe("profileReducer", () => {
    let initialState: ProfilePageType;

    beforeEach(() => {
        initialState = {
            post: [
                {id: "1", message: "Hi, how are you?", likesCount: 32},
                {id: "2", message: "It's my first post", likesCount: 45},
                {id: "3", message: "Hybrid theory", likesCount: 23},
                {id: "4", message: "To be continued", likesCount: 75},
            ],
            newPostText: "",
            profile: null,
            status: "",
        };
    });

    test("length ofposts should be incremented", () => {

        const action = addPostAC("New post");

        const newState = profileReducer(initialState, action);

        expect(newState.post.length).toBe(5);

    })

    test("message of new post should be correct", () => {

        const action = addPostAC("New post");

        const newState = profileReducer(initialState, action);

        expect(newState.post[4].message).toBe("New post");
    })

    test("after deleting length of messages should be decrement", () => {

        const action = deletePost("1")

        const newState = profileReducer(initialState, action);

        expect(newState.post.length).toBe(3)
    })

    test("after deleting length of messages should be decrement", () => {

        const action = deletePost("1000")

        const newState = profileReducer(initialState, action);

        expect(newState.post.length).toBe(4)
    })
});


