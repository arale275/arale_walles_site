/* sign up */

try {
  const { user } = await Auth.signUp({ username, password });
  console.log(user);
} catch (error) {
  console.log("error signing up:", error);
}

/* sign in */

try {
  const user = await Auth.signIn(username, password);
} catch (error) {
  console.log("error signing in", error);
}

/* sign out */

try {
  await Auth.signOut();
} catch (error) {
  console.log("error signing out: ", error);
}


/* create */

import { DataStore } from '@aws-amplify/datastore'; 
import { ManagesITE } from './models';

await DataStore.save(
  new ManagesITE({
  "Email": "test12346789@testemailtestemail.com",
  "Password": /* Provide a Password instance here */{}
})
);

/* update */

/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
 await DataStore.save(ManagesITE.copyOf(CURRENT_ITEM, item => {
  // Update the values on {item} variable to update DataStore entry
}));


/* delete */


const modelToDelete = await DataStore.query(ManagesITE, 123456789);
DataStore.delete(modelToDelete);

/* query */

const models = await DataStore.query(ManagesITE);
console.log(models);