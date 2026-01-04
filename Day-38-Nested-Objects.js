// Day 38: Nested Objects - Objects Inside Objects!

// Practices

// Exercise 1: Create a student object


let student = {

    name: "Adil",

    id: 116008,

    grades: {

        math: 70,

        english: 95,

        science: 80

    },

    contact: {

        email: "adil@gmail.com",

        phone: "123-456"

    }

};


console.log(`Student's name: ${student.name}
${student.name}'s Math grade: ${student.grades.math}
${student.name}'s email: ${student.contact.email}
Student ${student.name} scored ${student.grades.math} in math.`);

console.log("");
console.log("");



// Exercise 2: Book with author details


let book = {

    title: "Atomic Habits",

    pages: 320,

    author: {

        name: "James Clear",

        country: "United States",

        birthYear: 1986

    }

};


console.log(`${book.title} by ${book.author.name}.
Author is from ${book.author.country}.
Print length: ${book.pages}
Author's current age: ${2026 - book.author.birthYear}.`);

console.log("");
console.log("");



// Exercise 3: Restaurent menu item


let menuItem = {

    name: "Burger",

    price: 4,

    nutrition: {

        calories: 260,

        protein: 16,

        carbs: 30

    },

    availability: {

        inStock: true,

        servingTime: "lunch"

    }

};


console.log(`${menuItem.name} is $${menuItem.price}.
The dish has ${menuItem.nutrition.calories}.`);

if (menuItem.availability.inStock === true) {

    console.log(`${menuItem.name} is available.`);

} else {

    console.log(`${menuItem.name} isn't available.`);

}

console.log(`The ${menuItem.name} is served at ${menuItem.availability.servingTime}.`);

console.log("");
console.log("");



// Exercise 4: Company employee record


let employee = {

    id: 4321,

    fullName: {

        firstName: "Elon",

        lastName: "Musk"

    },

    position: "Space Nerd",

    salary: 120000,

    department: {

        name: "Mars",

        floor: 111,

        manager: "Groot"

    }

};


console.log(`${employee.fullName.firstName} ${employee.fullName.lastName} works as ${employee.position}.
Department: ${employee.department.name}, Floor ${employee.department.floor}.
${employee.fullName.firstName}'s manager is ${employee.department.manager}.
${employee.fullName.firstName}'s monthly salary is $${employee.salary / 12}.`);

console.log("");
console.log("");



// Challenge: Social media profile


let socialProfile = {

    username: "adil_the_dev",

    displayName: "Adil",

    bio: "self-taught dev or die trying 💀",

    stats: {

        followers: 1500,

        following: 320,

        posts: 87

    },

    personalInfo: {

        age: 17,

        location: {

            city: "Sylhet",

            country: "Bangladesh"

        }

    },

    settings: {

        inPrivate: false,

        allowMessages: true,

        theme: "dark"

    }

};

console.log(`SOCIAL PROFILE

@${socialProfile.username} - ${socialProfile.displayName}
Bio: ${socialProfile.bio}
Followers: ${socialProfile.stats.followers} | Following: ${socialProfile.stats.following}
Located in ${socialProfile.personalInfo.location.city}, ${socialProfile.personalInfo.location.country}.`);

console.log("");


function changeTheme(profile, newTheme) {

    profile.settings.theme = newTheme;

}

changeTheme(socialProfile, "light")

console.log(`New theme: ${socialProfile.settings.theme}`);

function addFollower(profile) {

    profile.stats.followers++;

}

for (let i = 0; i < 5; i++) {

    addFollower(socialProfile);

}

console.log(`New followers count: ${socialProfile.stats.followers}`);

if (socialProfile.settings.inPrivate === false) {

    console.log(`${socialProfile.displayName}'s account is public.`);

} else {

    console.log(`${socialProfile.displayName}'s account is private`);

}