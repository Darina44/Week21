class Cat {
    constructor(petName, ownerName, ownerPhone, breed, sex, foodTypeArr) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
        this.breed = breed;
        this.sex = sex;
        this.foodTypeArr = foodTypeArr;
    }
}

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('name1').value;
    const ownerPhone = document.getElementById('phone').value;
    const breed = document.getElementById('breed').value;

    const sexAll = document.getElementsByName('sex');
    let sex = 0;
    sexAll.forEach(element => {
        if (element.checked) {
            sex = `${element.id}`;
        }
    })

    const foodTypes = document.getElementsByName('food_type');
    let foodTypeArr = [];
    for (let foodType of foodTypes) {
        if (foodType.checked) {
            foodTypeArr.push(foodType.id);
        }
    }

    let cat = new Cat(petName, ownerName, ownerPhone, breed, sex, foodTypeArr);
    console.log(cat);
})