import i1 from '../img/i1.jpeg';
import i2 from '../img/i2.jpeg';
import i3 from '../img/i3.png';
import i4 from '../img/i4.jpg';
import i5 from '../img/i5.jpg';
import i6 from '../img/i6.jpg';
import i7 from '../img/i7.jpeg';
import i8 from '../img/i8.jpg';
import i11 from '../img/i11.jpeg';
import i12 from '../img/i12.jpg';
import i13 from '../img/i13.jpg';
import i14 from '../img/i14.jpg';

const orders = [
    {
        id:1,
        customerId:"1",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 99.10,
        paymentMethod: "Cash On Delivery",
        contact:"715-371-3507",
        status:"delivered",
        products: [
          {
            id:1,
            img: [i1],
            name: "Hitachi 3 Door French Bottom Freeze",
            desc: "Hitachi Refrigerator R-WB490P2PB-GBK - 456 Litres, a smart way to keep your food items fresh!Think smart, inspired living, Think Hitachi",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Refrigerators",
            tags: ['Refrigerators'],
            price: 97500
          },
          {
            id:2,
            img: [i2],
            name: "Hitachi Big French Refrigerator",
            desc: "Hitachi Refrigerator R-WB490P2PB-GBK - 456 Litres, a smart way to keep your food items fresh!Think smart, inspired living, Think Hitachi",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Refrigerators",
            tags: ['Refrigerators'],
            price: 85600
          },
          {
            id:3,
            img: [i3],
            name: "Samsung Bottom Mount Freezer ",
            desc: "Works longer, quieter & uses less energy Instant information & effortless controlStrong, safe shelves and more freezer space",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Refrigerators",
            tags: ['Refrigerators'],
            price: 34900
          },
        ]
    },
    {
        id:2,
        customerId:"2",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 322,
        paymentMethod:"Cash On Delivery",
        contact:"234-371-3507",
        status:"delivered",
        products: [
          {
            id:4,
            img: [i4],
            name: "Whirlpool Flexi-Freezer Two Door Frost Free Refrigerator CNV 375 ELT",
            desc: "Flexi- Freezer with 5- IN-1 Modes, 6TH SENSE® IntelliFresh Technology, Intellisense Inverter",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Refrigerators",
            tags: ['Refrigerators'],
            price: 65900
          },
        ]
    },
    {
        id:3,
        customerId:"1",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 643,
        paymentMethod:"Cash On Delivery",
        contact:"534-456-3507",
        status:"processing",
        products: [
          {
            id:5,
            img: [i5],
            name: " Rangs RR-230BT 230 Liter Refrigerator -(Maroon)",
            desc: "V03.01/ V04.01: 1000VA V05.01: No Need to use voltage stabilizer. If out of voltage range(140V-260V),then suggested voltage stabilizer capacity is 1000VA",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Refrigerators",
            tags: ['Refrigerators'],
            price: 30900
          },
          {
            id:6,
            img: [i6],
            name: " Sony Bravia 32 inch Smart Internet LED TV",
            desc: "Sony Bravia KLV-32W602D 32 Inch Smart Internet TV best price in Bangladesh buy 100% original    TV with official warranty from Sony Rangs online store. High Definition, X-Reality Pro, YouTube, X-Protection Pro.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Smart TV",
            tags: ['Smart TV'],
            price: 29900
          },
        ]
    },
    {
        id:4,
        customerId:"2",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 210,
        paymentMethod:"Cash On Delivery",
        contact:"978-234-3507",
        status:"pending",
        products: [
          {
            id:7,
            img: [i7],
            name: "Samsung 40M5100 40 Full HD Non Smart LED TV",
            desc: " Samsung 40M5100 40 Full HD non Smart LED TV comes with Clean View that reduces noise and interference while enhancing colour and contrast for the crystal clear view. Enjoy everything with refined image quality.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Smart TV",
            tags: ['Smart TV'],
            price: 29000
          },
        ]
    },
    {
        id:5,
        customerId:"1",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 110.89,
        paymentMethod:"Cash On Delivery",
        contact:"624-987-9805",
        status:"delivered",
        products: [
          {
            id:8,
            img: [i8],
            name: "KONKA KDL32MO669AN (32″ Internet TV)",
            desc: "Adopt true color LED back-light technology and IVR innovative vision technology (bi-stable and double 120Hz/MEMC/OPC technology) to greatly promote color gamut range and restore the true color.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Smart TV",
            tags: ['Smart TV'],
            price: 24990
          },
          {
            id:9,
            img: [i11],
            name: "Samsung Triangle Split AC | AR12JCSNAWK2RS | 1 Ton",
            desc: "The Samsung Air Conditioner has been designed from the ground up to be outstandingly efficient. Its uniquely triangular design has a wider inlet, so more air can be drawn in. The improved width and angle of its outlet, extra v-blades and a bigger fan also ensure that air is cooled and expelled faster, further and wider.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Air Conditioner",
            tags: ['Air Conditioner'],
            price: 55900
          },
        ]
    },
    {
        id:6,
        customerId:"3",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 756.30,
        paymentMethod:"Cash On Delivery",
        contact:"234-676-9076",
        status:"processing",
        products: [
          {
            id:10,
            img: [i12],
            name: "WSI-OCEANUS(VOICE CONTROL)-12A",
            desc: " Intelligent Inverter Air Conditioner, Function : Cooling, Cooling Capacity: 3517,Watts (12000 BTU/h), Refrigerant Type: R-32.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Air Conditioner",
            tags: ['Air Conditioner'],
            price: 47900
          },
        ]
    },
    {
        id:7,
        customerId:"3",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 299.99,
        paymentMethod:"Cash On Delivery",
        contact:"980-567-4353",
        status:"pending",
        products: [
            
          {
            id:12,
            img: [i14],
            name: "1.0 Ton BEKO Hot & Cool Inverter Air Conditioner",
            desc: " Self-Clean Technology to provide cleaning and fresh air to user , prohibiting bacteria breeding.Golden Guard to improve the heating efficiency by accelerating the defrosting process.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Air Conditioner",
            tags: ['Air Conditioner'],
            price: 52034
          },
        ]

    },
    {
        id:8,
        customerId:"4",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 657,
        paymentMethod:"Cash On Delivery",
        contact:"123-435-6780",
        status:"failed",
        products: [
          {
            id:9,
            img: [i11],
            name: "Samsung Triangle Split AC | AR12JCSNAWK2RS | 1 Ton",
            desc: "The Samsung Air Conditioner has been designed from the ground up to be outstandingly efficient. Its uniquely triangular design has a wider inlet, so more air can be drawn in. The improved width and angle of its outlet, extra v-blades and a bigger fan also ensure that air is cooled and expelled faster, further and wider.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Air Conditioner",
            tags: ['Air Conditioner'],
            price: 55900
          },
          {
            id:10,
            img: [i12],
            name: "WSI-OCEANUS(VOICE CONTROL)-12A",
            desc: " Intelligent Inverter Air Conditioner, Function : Cooling, Cooling Capacity: 3517,Watts (12000 BTU/h), Refrigerant Type: R-32.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Air Conditioner",
            tags: ['Air Conditioner'],
            price: 47900
          },
        ]
    },
    {
        id:9,
        customerId:"5",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 512,
        paymentMethod:"Cash On Delivery",
        contact:"965-345-123",
        status:"pending",
        products: [
          {
            id:8,
            img: [i8],
            name: "KONKA KDL32MO669AN (32″ Internet TV)",
            desc: "Adopt true color LED back-light technology and IVR innovative vision technology (bi-stable and double 120Hz/MEMC/OPC technology) to greatly promote color gamut range and restore the true color.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Smart TV",
            tags: ['Smart TV'],
            price: 24990
          },
        ]
    },
    {
        id:10,
        customerId:"6",
        date:"18 Jun 2021",
        address:"29 Eve Street, 543 Evenue Road, Ny 87876",
        amount: 249.7,
        paymentMethod:"Cash On Delivery",
        contact:"567-353-5434",
        status:"failed",
        products: [
          {
            id:7,
            img: [i7],
            name: "Samsung 40M5100 40 Full HD Non Smart LED TV",
            desc: " Samsung 40M5100 40 Full HD non Smart LED TV comes with Clean View that reduces noise and interference while enhancing colour and contrast for the crystal clear view. Enjoy everything with refined image quality.",
            unit:'lb',
            sale:1.0,
            discount:0,
            quantity:100,
            type: "Smart TV",
            tags: ['Smart TV'],
            price: 29000
          },
        ]
    },
]

export default orders;