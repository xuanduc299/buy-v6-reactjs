import React, { createContext, useState, useEffect } from 'react'
import img1 from '../img/img-sneaker.jpg'
import img2 from '../img/img-sneaker-01.jpg'
import img3 from '../img/img-sneaker-02.jpg'
import img4 from '../img/img-sneaker-03.jpg'
import img5 from '../img/img-sneaker-04.jpg'
import img6 from '../img/img-sneaker-05.jpg'
import img7 from '../img/shoes-01.jpg'
import img8 from '../img/shoes-02.jpg'
import img9 from '../img/shoes-03.jpg'
import img10 from '../img/shoes-04.jpg'
import img11 from '../img/product_01.png'
import img12 from '../img/product_02.png'
import img13 from '../img/product_03.png'
import img14 from '../img/product_04.png'
import img15 from '../img/product_05.png'
import img16 from '../img/product_06.png'
import img17 from '../img/product_07.png'
import img18 from '../img/product_08.png'
import img19 from '../img/product_09.png'
import img20 from '../img/product_10.png'
import img21 from '../img/product_11.png'
import img22 from '../img/product_12.png'
import img23 from '../img/shoes_kid_01.png'
import img24 from '../img/shoes_kid_02.png'
import img25 from '../img/shoes_kid_03.png'
import img26 from '../img/shoes_kid_04.png'
import img27 from '../img/shoes_women_01.png'
import img28 from '../img/shoes_women_02.png'
import img29 from '../img/shoes_women_03.png'
import img30 from '../img/shoes_women_04.png'
import img31 from '../img/shirt-01.jpg'
import img32 from '../img/shirt-02.jpg'
import img33 from '../img/shirt-03.jpg'
import img34 from '../img/shirt-04.jpg'
import img35 from '../img/shirt-05.jpg'
import img36 from '../img/shirt-06.jpg'
import img37 from '../img/shirt-07.jpg'
import img38 from '../img/shirt-08.jpg'
import img39 from '../img/shirt-09.jpg'
import img40 from '../img/shirt-10.jpg'
import img41 from '../img/shirt-11.jpg'
import img42 from '../img/shirt-12.jpg'
import img43 from '../img/shirt-13.jpg'
import img44 from '../img/shirt-14.jpg'
import img45 from '../img/shirt-15.jpg'
import img46 from '../img/shirt-16.jpg'
import img47 from '../img/shirt-17.jpg'
import img48 from '../img/shirt-18.jpg'
import img49 from '../img/shirt-19.jpg'




export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "NIKE WIHTE",
            "images": [
                img1,
                img2,
                img3,
                img4
            ],
            "description": "GIày sneaker nam nữ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "2",
            "title": " Giày ROSS",
            "images": [
                img5,
                img6,
                img7,
                img8
            ],
            "description": "kiểu dáng hàn quốc",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "3",
            "title": "GIÀY GALAXY 5",
            "images": [
                img9,
                img10,
                img1,
                img2
            ],
            "description": "GIÀY CHẠY BỘ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "4",
            "title": "VANS OLD SCHOOL",
            "images": [
                img3,
                img4,
                img5,
                img6
            ],
            "description": "Giày Sneaker",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1

        },
        {
            "_id": "5",
            "title": "ADIDAS NMD HU PHARRELL 'CHOCOLATE' - GY0090",
            "images": [
                img7,
                img8,
                img9,
                img10
            ],
            "description": "Giày NMD",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1

        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                img1,
                img2,
                img3,
                img4
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1

        }
    ])

    const [products_01, setProducts_01] = useState([
        {
            "_id": "11",
            "title": "Wacth Product 01",
            "images": [
                img1,
                img2,
                img3,
                img4
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "12",
            "title": "Wacth Product 02",
            "images": [
                img5,
                img6,
                img7,
                img8
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "13",
            "title": "Wacth Product 03",
            "images": [
                img9,
                img10,
                img1,
                img2
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
    ])



    const [products_02, setProducts_02] = useState([
        {
            "_id": "100",
            "title": "nike 100",
            "images": [
                img11,
                img12,
                img13,
                img14
            ],
            "description": "giay 100",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "101",
            "title": "nike 101",
            "images": [
                img12,
                img13,
                img14,
                img15
            ],
            "description": "giay 101",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "102",
            "title": "nike 102",
            "images": [
                img13,
                img14,
                img15,
                img16
            ],
            "description": "giay 102",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
        ,
        {
            "_id": "103",
            "title": "nike 103",
            "images": [
                img14,
                img15,
                img16,
                img17
            ],
            "description": "giay 103",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
        ,
        {
            "_id": "104",
            "title": "nike 104",
            "images": [
                img15,
                img16,
                img17,
                img18
            ],
            "description": "giay 104",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "105",
            "title": "nike 105",
            "images": [
                img16,
                img17,
                img18,
                img19
            ],
            "description": "giay 105",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "106",
            "title": "Wacth Product 03",
            "images": [
                img17,
                img18,
                img19,
                img20
            ],
            "description": "giay 106",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "107",
            "title": "Wacth Product 03",
            "images": [
                img18,
                img19,
                img20,
                img21
            ],
            "description": "giay 107",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "108",
            "title": "Wacth Product 03",
            "images": [
                img19,
                img20,
                img21,
                img22
            ],
            "description": "giay 108",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "109",
            "title": "Wacth Product 03",
            "images": [
                img20,
                img21,
                img22,
                img11
            ],
            "description": "giay 109",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "110",
            "title": "Wacth Product 03",
            "images": [
                img21,
                img22,
                img11,
                img12
            ],
            "description": "giay 110",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "111",
            "title": "Wacth Product 03",
            "images": [
                img22,
                img11,
                img12,
                img13
            ],
            "description": "giay 111",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }



    ])

    const [products_03, setProducts_03] = useState([
        {
            "_id": "21",
            "title": "GIÀY RUNFALCON 2.0 MESSI",
            "images": [
                img23,
                img24,
                img25,
                img26
            ],
            "description": "Sportswear",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "22",
            "title": "GIÀY ĐÁ BÓNG X SPEEDFLOW.3 FIRM GROUND",
            "images": [
                img24,
                img25,
                img26,
                img23
            ],
            "description": "GIÀY ĐÁ BÓNG",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "23",
            "title": "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO QUAI DÁN X SPEEDFLOW.4",
            "images": [
                img25,
                img26,
                img23,
                img24
            ],
            "description": "GIÀY ĐÁ BÓNG",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "24",
            "title": "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO X SPEEDFLOW.3",
            "images": [
                img26,
                img23,
                img24,
                img25
            ],
            "description": "GIÀY ĐÁ BÓNG",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
    ])
    const [products_04, setProducts_04] = useState([
        {
            "_id": "31",
            "title": "Giày Adistar CS",
            "images": [
                img27,
                img28,
                img29,
                img30
            ],
            "description": "Girls Run",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "32",
            "title": "Giày Ozelle Lifestyle Running Cloudfoam",
            "images": [
                img28,
                img29,
                img30,
                img27
            ],
            "description": "Nữ Sportswear",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "33",
            "title": "GALAXY 6 W",
            "images": [
                img29,
                img30,
                img27,
                img28
            ],
            "description": "Girls Run",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "34",
            "title": "GALAXY 6 W",
            "images": [
                img30,
                img27,
                img28,
                img29
            ],
            "description": "Girls Run",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
    ])

    const [products_05, setProducts_05] = useState([
        {
            "_id": "41",
            "title": "HEROBIKER ",
            "images": [
                img31,
                img32,
                img33,
                img34
            ],
            "description": "Ao du nhiet",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "42",
            "title": "Ao BaLo",
            "images": [
                img32,
                img31,
                img33,
                img34
            ],
            "description": "Nam",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "43",
            "title": "HEROBIKER",
            "images": [
                img33,
                img32,
                img31,
                img34
            ],
            "description": "Ao du Nhiet tay ngan",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "45",
            "title": "Ao the thao",
            "images": [
                img34,
                img32,
                img31,
                img33
            ],
            "description": "Ao the thao nam ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "46",
            "title": "Ao the thao",
            "images": [
                img35,
                img36,
                img37,
                img38
            ],
            "description": "Ao the thao nam",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "47",
            "title": "Ao the thao",
            "images": [
                img36,
                img35,
                img37,
                img38
            ],
            "description": "Ao the thao nam ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "48",
            "title": "HEROBIKER",
            "images": [
                img37,
                img35,
                img36,
                img38
            ],
            "description": "Ao du nhiet tay ngan black",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "49",
            "title": "Arsenal",
            "images": [
                img38,
                img35,
                img36,
                img37
            ],
            "description": "Ao the thao",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "50",
            "title": "Arsenal",
            "images": [
                img39,
                img40,
                img41,
                img42
            ],
            "description": "Ao the thao",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "51",
            "title": "Ao the thao Red",
            "images": [
                img40,
                img39,
                img41,
                img42
            ],
            "description": "Ao the thao.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "52",
            "title": "Ao ba lo",
            "images": [
                img41,
                img39,
                img40,
                img42
            ],
            "description": "Ao ba lo nam ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "53",
            "title": "Ao the thao pink",
            "images": [
                img42,
                img39,
                img40,
                img41
            ],
            "description": "Ao the thao",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "54",
            "title": "Ao the thao white-green",
            "images": [
                img43,
                img44,
                img45,
                img46
            ],
            "description": "Ao the thao nam",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "55",
            "title": "Ao ba lo",
            "images": [
                img44,
                img43,
                img45,
                img46
            ],
            "description": "Ao nam",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "56",
            "title": "Ao the thao Siver ",
            "images": [
                img45,
                img43,
                img44,
                img46
            ],
            "description": "Ao the thao nam",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "57",
            "title": "Ao the thao",
            "images": [
                img46,
                img43,
                img44,
                img45
            ],
            "description": "Ao the thao nam ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "58",
            "title": "Ao the thao Silver",
            "images": [
                img47,
                img48,
                img49,
                img46
            ],
            "description": "Ao the thao",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "59",
            "title": "Wacth Product 03",
            "images": [
                img48,
                img47,
                img49,
                img46
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }

    ])

    const [products_06, setProducts_06] = useState([
        {
            "_id": "200",
            "title": "NIKE WIHTE",
            "images": [
                img1,
                img2,
                img3,
                img4
            ],
            "description": "GIày sneaker nam nữ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "201",
            "title": " Giày ROSS",
            "images": [
                img5,
                img6,
                img7,
                img8
            ],
            "description": "kiểu dáng hàn quốc",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "202",
            "title": "GIÀY GALAXY 5",
            "images": [
                img9,
                img10,
                img1,
                img2
            ],
            "description": "GIÀY CHẠY BỘ",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "203",
            "title": "VANS OLD SCHOOL",
            "images": [
                img3,
                img4,
                img5,
                img6
            ],
            "description": "Giày Sneaker",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1

        }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    const addCart_01 = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products_01.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    const addCart_02 = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products_02.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    const addCart_03 = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products_03.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    const addCart_04 = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products_04.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    const addCart_05 = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products_05.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    const addCart_06 = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products_06.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])


    const value = {
        products: [products, setProducts],
        products_01: [products_01, setProducts_01],
        products_02: [products_02, setProducts_02],
        products_03: [products_03, setProducts_03],
        products_04: [products_04, setProducts_04],
        products_05: [products_05, setProducts_05],
        products_06: [products_06, setProducts_06],
        cart: [cart, setCart],
        addCart: addCart,
        addCart_01: addCart_01,
        addCart_02: addCart_02,
        addCart_03: addCart_03,
        addCart_04: addCart_04,
        addCart_05: addCart_05,
        addCart_06: addCart_06,

    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}