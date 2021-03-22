let findTheOldest = function(people) {
    return oldestPerson = people.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge > personAge ? oldest : person;
    })

}

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
