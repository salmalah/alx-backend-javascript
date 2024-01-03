/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((r) => {
    console.log(`${r[0].body} ${r[1].firstName} ${r[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
