import postPicture1 from '../img/postpic1.jpg'
import postPicture2 from '../img/postpic2.jpg'
import postPicture3 from '../img/postpic3.jpg'
import { IPost } from '../interfaces'


export const postsData: IPost[] = [
    {
        img: postPicture1,
        name: 'Tzuyu',
        desc: "Happy New Year all friends! #2023",
        likes: 2300,
        liked: true
    },
    {
        img: postPicture2,
        name: 'Maryam',
        desc: "Party time :)",
        likes: 2300,
        liked: false

    },
    {
        img:postPicture3,
        name: "Salena Gomez",
        desc: "At Archery Festival",
        likes: 800,
        liked: false
    }
]