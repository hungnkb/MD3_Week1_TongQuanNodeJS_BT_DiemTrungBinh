let list = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];


let maleList = list.filter(
    student => student.gender == 'male'
);

let femaleList = list.filter(
    student => student.gender == 'female'
)

let totalMale = maleList.length;
let totalFemale = femaleList.length;

let totalPointMale = maleList.reduce(
    (totalPointMale, currentMale) => 
        totalPointMale + currentMale.point
    , 0
);

let totalPointFemale = femaleList.reduce(
    (totalPointFemale, currentFemale) => 
        totalPointFemale + currentFemale.point
    , 0
)

let averagePointMale = totalPointMale / totalMale;
let averagePointFemale = totalPointFemale / totalFemale;


console.log('Male student average point = ' + averagePointMale)
console.log('Female student average point = ' + averagePointFemale)
