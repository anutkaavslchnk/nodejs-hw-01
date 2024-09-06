import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
fs.writeFile(PATH_DB, JSON.stringify([]));

};

removeAllContacts();
