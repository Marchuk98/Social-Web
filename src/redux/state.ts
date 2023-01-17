type MessagePropsType = {
    id:number
    message:string
}
type DialogPropsType = {
    id:number
    name:string
}
type PostPropsType = {
    id:number
    img:string
    message:string
    likesCount: number
}

type ProfilePagePropsType = {
    post: Array<PostPropsType>
}

type DialogPagePropsType = {
    dialogs: Array<DialogPropsType>
    message: Array<MessagePropsType>
}

type SidebarType = {}

type RootStatePropsType = {
    profilePage:ProfilePagePropsType
    dialogsPage:DialogPagePropsType
    sidebar:SidebarType
}


let state:RootStatePropsType = {
    profilePage: {
        post: [
            {id: 1,img:'https://messenge.ru/wp-content/uploads/2021/07/06.07.2021-46.jpg', message: 'Hi, how are you?', likesCount: 32},
            {id: 2,img:'https://messenge.ru/wp-content/uploads/2021/07/06.07.2021-46.jpg', message: 'It\'s my first post', likesCount: 45},
            {id: 3,img:'https://messenge.ru/wp-content/uploads/2021/07/06.07.2021-46.jpg', message: 'Hybrid theory', likesCount: 23},
            {id: 4,img:'https://messenge.ru/wp-content/uploads/2021/07/06.07.2021-46.jpg', message: 'To be continued', likesCount: 75}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vladimir'},
            {id: 2, name: 'Ekaterina'},
            {id: 3, name: 'Alexander'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Victoria'},
            {id: 6, name: 'Olga'},
            {id: 7, name: 'Svetlana'}
        ],
        message: [
            {id:1, message:'Hello'},
            {id:2, message:'How are your'},
            {id:3, message:'Normal'},
            {id:4, message:'Yo'},
            {id:5, message:'What'}

        ]
    },
        sidebar: {}
}

export default state;
