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
            "_id": "2",
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
            "_id": "3",
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

        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                img3,
                img4,
                img5,
                img6
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1

        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                img7,
                img8,
                img9,
                img10
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
            "title": "Wacth Product 01",
            "images": [
                img11,
                img12,
                img13,
                img14
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "101",
            "title": "Wacth Product 02",
            "images": [
                img12,
                img13,
                img14,
                img15
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "102",
            "title": "Wacth Product 03",
            "images": [
                img13,
                img14,
                img15,
                img16
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
        ,
        {
            "_id": "103",
            "title": "Wacth Product 03",
            "images": [
                img14,
                img15,
                img16,
                img17
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }
        ,
        {
            "_id": "104",
            "title": "Wacth Product 03",
            "images": [
                img15,
                img16,
                img17,
                img18
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "105",
            "title": "Wacth Product 03",
            "images": [
                img16,
                img17,
                img18,
                img19
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
                img18,
                img19,
                img20,
                img21
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
                img19,
                img20,
                img21,
                img22
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
                img20,
                img21,
                img22,
                img11
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
                img21,
                img22,
                img11,
                img12
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
                img22,
                img11,
                img12,
                img13
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
            "title": "Wacth Product 01",
            "images": [
                img23,
                img24,
                img25,
                img26
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "22",
            "title": "Wacth Product 02",
            "images": [
                img24,
                img25,
                img26,
                img23
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "23",
            "title": "Wacth Product 03",
            "images": [
                img25,
                img26,
                img23,
                img24
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "24",
            "title": "Wacth Product 03",
            "images": [
                img26,
                img23,
                img24,
                img25
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
            "title": "Wacth Product 01",
            "images": [
                img27,
                img28,
                img29,
                img30
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "32",
            "title": "Wacth Product 02",
            "images": [
                img28,
                img29,
                img30,
                img27
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "33",
            "title": "Wacth Product 03",
            "images": [
                img29,
                img30,
                img27,
                img28
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "34",
            "title": "Wacth Product 03",
            "images": [
                img30,
                img27,
                img28,
                img29
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
            "title": "Wacth Product 02",
            "images": [
                img31,
                img32,
                img33,
                img34
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "42",
            "title": "Wacth Product 03",
            "images": [
                img32,
                img31,
                img33,
                img34
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "43",
            "title": "Wacth Product 03",
            "images": [
                img33,
                img32,
                img31,
                img34
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "45",
            "title": "Wacth Product 01",
            "images": [
                img34,
                img32,
                img31,
                img33
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "46",
            "title": "Wacth Product 02",
            "images": [
                img35,
                img36,
                img37,
                img38
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "47",
            "title": "Wacth Product 03",
            "images": [
                img36,
                img35,
                img37,
                img38
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "48",
            "title": "Wacth Product 03",
            "images": [
                img37,
                img35,
                img36,
                img38
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "49",
            "title": "Wacth Product 01",
            "images": [
                img38,
                img35,
                img36,
                img37
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "50",
            "title": "Wacth Product 02",
            "images": [
                img39,
                img40,
                img41,
                img42
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "51",
            "title": "Wacth Product 03",
            "images": [
                img40,
                img39,
                img41,
                img42
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "52",
            "title": "Wacth Product 03",
            "images": [
                img41,
                img39,
                img40,
                img42
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "53",
            "title": "Wacth Product 01",
            "images": [
                img42,
                img39,
                img40,
                img41
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "54",
            "title": "Wacth Product 02",
            "images": [
                img43,
                img44,
                img45,
                img46
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "55",
            "title": "Wacth Product 03",
            "images": [
                img44,
                img43,
                img45,
                img46
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "56",
            "title": "Wacth Product 03",
            "images": [
                img45,
                img43,
                img44,
                img46
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        }, {
            "_id": "57",
            "title": "Wacth Product 01",
            "images": [
                img46,
                img43,
                img44,
                img45
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "58",
            "title": "Wacth Product 02",
            "images": [
                img47,
                img48,
                img49,
                img46
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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
        cart: [cart, setCart],
        addCart: addCart,
        addCart_01: addCart_01,
        addCart_02: addCart_02,
        addCart_03: addCart_03,
        addCart_04: addCart_04,
        addCart_05: addCart_05


    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}