import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MembershipData implements InMemoryDbService {
  createDb() {
    const users = [
        {
            id: 1,
            username: "pretty",
            password: "pretty123",
            profile: {
                name: "Ramya",
                surname: "Dasarathan",
                birthday: { day: 12, month: 1, year: 1970 },
                gender: "female",
                image: "assets/img/profile/ashley.jpg"
            },
            work: {
                company: "DLF",
                position: "Product designer",
                salary: 25000
            },
            contacts:{
                email: "ramya@gmail.com",
                phone: "+91-7561219756",
                address: "Chennai"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z"
            },
            menuIds: []
        },
        {
            id: 2,
            username: "bruno.V",
            password: "bruno123",
            profile: {
                name: "Vetriprabu",
                surname: "Vespa",
                birthday: { day: 13, month: 10, year: 1987 },
                gender: "male",
                image: "assets/img/profile/bruno.jpg"
            },
            work: {
                company: "Dell",
                position: "Architect",
                salary: 70000
            },
            contacts:{
                email: "vetri@dell.com",
                phone: "+91-7623120332",
                address: "Coimbatore"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: false,
                registrationDate: "2011-01-05T08:45:23.511Z",
                joinedDate: "2017-05-20T18:25:43.511Z"
            },
            menuIds: [] 
        },
        {
            id: 3,
            username: "andy.79",
            password: "andy123",
            profile: {
                name: "Santhakumar",
                surname: "Prabu",
                birthday: { day: 21, month: 10, year: 1979 },
                gender: "male",
                image: "assets/img/avatars/avatar-1.png"
            },
            work: {
                company: "Zoho",
                position: "Product manager",
                salary: 13000
            },
            contacts:{
                email: "sandhu@zoho.com",
                phone: "+91-9645732308",
                address: "Banglore"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: true,
                registrationDate: "2014-11-01T19:35:43.511Z",
                joinedDate: "2017-06-28T15:25:43.511Z"
            },
            menuIds: [] 
        },
        {
            id: 4,
            username: "julia.a",
            password: "julia123",
            profile: {
                name: "Suruthi",
                surname: "Ram",
                birthday: { day: 18, month: 6, year: 1982 },
                gender: "female",
                image: "assets/img/profile/julia.jpg"
            },
            work: {
                company: "Apple",
                position: "Sales manager",
                salary: 18000
            },
            contacts:{
                email: "suruthi@apple.com",
                phone: "+91-8826781346",
                address: "Vellore"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2015-12-06T11:10:20.511Z",
                joinedDate: "2017-06-29T15:15:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 5,
            username: "lusia.m",
            password: "lusia123",
            profile: {
                name: "Aasifa",
                surname: "Imran",
                birthday: { day: 2, month: 12, year: 1992 },
                gender: "female",
                image: "assets/img/avatars/avatar-1.png"
            },
            work: {
                company: "Infosys",
                position: "Office manager",
                salary: 100000
            },
            contacts:{
                email: "assifa@infosys.com",
                phone: "+91-7682671346",
                address: "Banglore"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2014-01-10T10:20:20.511Z",
                joinedDate: "2017-06-28T12:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 6,
            username: "adam.82",
            password: "adam123",
            profile: {
                name: "Sathish",
                surname: "Ramkumar",
                birthday: { day: 24, month: 12, year: 1987 },
                gender: "male",
                image: "assets/img/profile/adam.jpg"
            },
            work: {
                company: "Capgemini",
                position: "Senior Developer",
                salary: 45000
            },
            contacts:{
                email: "sathish@capgemini.com",
                phone: "91-9882671346",
                address: "Chennai"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: false,
                registrationDate: "2016-11-16T12:20:20.511Z",
                joinedDate: "2017-06-27T14:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 7,
            username: "tereza.s",
            password: "tereza123",
            profile: {
                name: "Tereza",
                surname: "Stiles",
                birthday: { day: 9, month: 7, year: 1979 },
                gender: "female",
                image: "assets/img/profile/tereza.jpg"
            },
            work: {
                company: "Southwest Airlines",
                position: "Sale manager",
                salary: 31000
            },
            contacts:{
                email: "tereza@airlines.com",
                phone: "(214) 617-2614",
                address: "Texas, Dallas"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2010-10-12T16:20:20.511Z",
                joinedDate: "2017-06-29T15:20:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 8,
            username: "michael.b",
            password: "michael123",
            profile: {
                name: "Michael",
                surname: "Blair",
                birthday: { day: 15, month: 11, year: 1978 },
                gender: "male",
                image: "assets/img/profile/michael.jpg"
            },
            work: {
                company: "Microsoft",
                position: "Software developer",
                salary: 50000
            },
            contacts:{
                email: "michael@microsoft.com",
                phone: "(267) 388-1637",
                address: "Pennsylvania, Philadelphia"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2009-08-12T16:20:20.511Z",
                joinedDate: "2017-06-30T11:30:40.511Z"
            },
            menuIds: [] 
        },
        {
            id: 9,
            username: "michelle.81",
            password: "michelle123",
            profile: {
                name: "Michelle",
                surname: "Ormond",
                birthday: { day: 18, month: 11, year: 1981 },
                gender: "female",
                image: "assets/img/avatars/avatar-1.png"
            },
            work: {
                company: "Starbucks",
                position: "Sale manager",
                salary: 15000
            },
            contacts:{
                email: "michelle@starbucks.com",
                phone: "(267) 388-1637",
                address: "Washington, Seattle"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: false,
                isDeleted: true,
                registrationDate: "2012-11-10T18:20:20.511Z",
                joinedDate: "2015-03-29T17:20:40.511Z"
            },
            menuIds: [] 
        }
       
    ];
    return {users};
  }
}