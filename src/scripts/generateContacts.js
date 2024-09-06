
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
const generateContacts = async (number) => {
    try {
        const contacts=await readContacts();
        const generate=Array.from({length:number}, ()=>createFakeContact());
        const update=[...contacts, ...generate];
        await writeContacts(update);
    } catch (error) {
        console.log(error);
    }
};

generateContacts(5);

// 1)read file(parse)
//2)generate new contacts with Array.from
//3)spread read constant and generated
//4)write all of changes to file of db
