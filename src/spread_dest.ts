// spread operator 
// rest operator 
// destructure 


// spread operator 

const   bros: string[] = ["Mir", "Firoz", "Mizan"]
const   bros2: string[] = ["Tonmoy", "Majod", "Rahat"]

bros.push(...bros2)


const mentors1 = {
    typecript: "Mezba",
    redux: 'MiR',
    dbms: 'Mizan'
}

const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
}

const mentors = {
    ...mentors1,
    ...mentors2
}


// rest operator 
const greetFriends = (...friends: string[]) => { 
    console.log('Hi friends,', friends)
}


// destructuring
const userOne = {
    id: 1,
    name: {
        firstname: "Ashraful",
        lastname: "Islam",
    },
    contactNo: '01555245547',
    address :"Uganda"
}