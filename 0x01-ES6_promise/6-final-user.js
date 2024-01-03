import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPro = signUpUser(firstName, lastName);
  const photoPro = uploadPhoto(fileName);

  return Promise.allSettled([signUpPro, photoPro]).then((values) => {
    const res = [];
    values.forEach((elem) => {
      if (elem.status === 'fulfilled') {
        res.push({ status: elem.status, value: elem.value });
      } else {
        res.push({ status: elem.status, value: `${elem.reason}` });
      }
    });
    return res;
  });
}
