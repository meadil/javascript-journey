// Day 40: Object Practice

// Today, I'm building a Contact Book

// Part 1: Create the Initial Contact Book


let contacts = [

    {

        name: "Elon Musk",

        phone: "555-1234",

        email: "elon@email.com",

        favorite: true

    },

    {

        name: "Bill Gates",

        phone: "555-5678",

        email: "bill@email.com",

        favorite: false

    },

    {

        name: "Mark Zuckerberg",

        phone: "555-9999",

        email: "mark@email.com",

        favorite: false

    }

];


console.log("Contact Book Created!");

console.log(`Total contacts: ${contacts.length}`);



// Part 2: Display all the contacts function


function displayAllContacts(contactList) {

    console.log("\n=== ALL CONTACTS ===");

    for (let i = 0; i < contactList.length; i++) {

        let contact = contactList[i];

        let star = contact.favorite ? "⭐" : "";

        console.log(`${i + 1}. ${contact.name} ${star}
   Phone: ${contact.phone}
   Email: ${contact.email}
   `)

    }

}


displayAllContacts(contacts);



// Part 3: Add new contact function


function addContact(contactList, name, phone, email) {

    let newContact = {

        name: name,

        phone: phone,

        email: email,

        favorite: false

    };

    contactList.push(newContact);

    console.log(`\n✅ Added ${name} to contacts!`)

}


addContact(contacts, "Jeff Bezos", "555-7777", "jeff@email.com");

displayAllContacts(contacts);



// Part 4: Search for a contact


function findContactByName(contactList, searchName) {

    for (let i = 0; i < contactList.length; i++) {

        if (contactList[i].name.toLowerCase().includes(searchName.toLowerCase())) {

            return contactList[i];

        }

    }

    return null;

}


let found = findContactByName(contacts, "jeff");


if (found !== null) {

    console.log(`\n🔍 FOUND:
Name: ${found.name}
Phone: ${found.phone}
Email: ${found.email}`);

    } else {

    console.log("\n❌ Contact not found");

}



// Part 5: Update a contact


function updatePhone(contactList, name, newPhone) {

    let contact = findContactByName(contactList, name);

    if (contact !== null) {

        contact.phone = newPhone;

        console.log(`\n✅ Updated ${contact.name}'s phone to ${newPhone}`);

    } else {

        console.log(`\n❌ Cannot update - ${name} not found`)

    }

}


updatePhone(contacts, "elon", "555-0000");

displayAllContacts(contacts);



// Practice Time

// Exercise 1: Toggle favorite


function toggleFavorite(contactList, name) {

    let contact = findContactByName(contactList, name);

    if (contact !== null) {

        contact.favorite = !contact.favorite;

        console.log(`\n${contact.name} is now in ${contact.favorite ? "favorite" : "non-favorite"} list!`);

    } else {

        console.log(`\n❌ ${contact.name} isn't in the contacts`);

    }

}


toggleFavorite(contacts, "elon");

toggleFavorite(contacts, "bill");

toggleFavorite(contacts, "jeff");

displayAllContacts(contacts);



// Exercise 2: Delete a contact


function deleteContact(contactList, name) {

    for (let i = 0; i < contactList.length; i++) {

        if (contactList[i].name.toLowerCase() === name.toLowerCase()) {

            contactList.splice(i, 1); // it's not working, gimme the solution 😑

            console.log(`\n✅ ${name} is deleted from the contacts`);

            return true;

        }

    }

    console.log(`\n❌ ${name} isn't found in the contacts`);

    return false;

}


deleteContact(contacts, "Jeff");

displayAllContacts(contacts);



// Exercise 3: Count favorites


function countFavorites(contactList) {

    let count = 0;

    for (let i = 0; i < contactList.length; i++) {

        if (contactList[i].favorite !== false) {

            count++

        }

    }

    return count;

}

let favCount = countFavorites(contacts);

console.log(`You have ${favCount} favorite contacts`);



// Exercise 4: Get all favorites


function getFavoritesContacts(contactList) {

    let favorites = [];

    for (let i = 0; i < contactList.length; i++) {

        if (contactList[i].favorite !== false) {

            favorites.push(contactList[i]);

        }

    }

    return favorites;

}


let myFavorites = getFavoritesContacts(contacts);

console.log("\n⭐ FAVORITE CONTACTS");

displayAllContacts(myFavorites);



// MEGA CHALLENGE: Full Contact Manager


let contactManager = {

    contacts: [],

    add: function(name, phone, email) {

        let contact = {

            name: name,

            phone: phone,

            email: email,

            favorite: false

        }

        this.contacts.push(contact);

    },

    display: function() {

        console.log("\n=== ALL CONTACTS ===");

        for (let i = 0; i < this.contacts.length; i++) {

            let contact = this.contacts[i];

            let star = contact.favorite ? "⭐" : "";
        
            console.log(`${i + 1}. ${contact.name} ${star}`);
            console.log(`   Phone: ${contact.phone}`);
            console.log(`   Email: ${contact.email}`);
            console.log("");

        }

    },

    search: function(name) {

        for (let i = 0; i < this.contacts.length; i++) {

            if (this.contacts[i].name.toLowerCase().includes(name.toLowerCase())) {

                return this.contacts[i];

            }

        }

        return null;

    },

    update: function(name, newPhone) {

        let contact = this.search(name);

        if (contact !== null) {

            contact.phone = newPhone;

            console.log(`\n✅ Updated ${contact.name}'s phone to ${newPhone}`);

        } else {

            console.log(`\n❌ Cannot update - ${name} not found`);

        }

    },

    toggleFav: function(name) {

        let contact = this.search(name);

        if (contact !== null) {

            contact.favorite = !contact.favorite;

            console.log(`\n${contact.name} is now in ${contact.favorite ? "favorite" : "non-favorite"} list!`);

        } else {

            console.log(`\n❌ ${contact.name} isn't in the contacts`);

        }

    },

    delete: function(name) {

        for (let i = 0; i < this.contacts.length; i++) {

            if (this.contacts[i].name === name) {

                this.contacts.splice(i, 1);

                return `\n✅ ${name} is deleted from the contacts`;

            } else {

                return `\n❌ ${name} isn't found in the contacts`;

            }

        }

    }

};


contactManager.add("Elon Musk", "555-1234", "elon@email.com");

contactManager.add("Bill Gates", "555-5678", "bill@email.com");

contactManager.display();