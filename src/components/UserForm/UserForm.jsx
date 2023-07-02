// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {  } from '../../redux/account/account.selectors';
// import { } from '../../redux/account/account.operations';
// import { useFormik } from 'formik';
// import DatePicker from 'react-datepicker';
// import UserFormSchema from './UserFormSchema';
// import { ReactComponent as Error } from '../../icons/';
// import { ReactComponent as Success } from '../../icons/';
// import { ReactComponent as Plus } from '../../icons/';
// import './calendar.css';
// import css from './UserForm.module.css';

// export const UserForm = () => {
//   const dispatch = useDispatch();
//   const {
//     user: { userPhoto, name, birthday, email, phone, skype },
//   } = useSelector(selectUser);
//   const formik = useFormik({
//     initialValues: {
//       userPhoto: '',
//       name: formData.name ?? '',
//       birthday: formData.birthday ?? '',
//       email: formData.email,
//       phone: formData.phone ?? '',
//       skype: formData.skype ?? '',
//     },
//     validationSchema: UserFormSchema,
//     validateOnChange: true,
//     onSubmit: () => {
//       Object.keys(formData).forEach(key => {
//         formDataObj.append(key, formData[key]);
//       });
//       dispatch(updateUser(formDataObj));
//       setIsChanged(false);
//     },
//   });
//   return (
//     <form>
//       <div className={css.plus_container}>
//         <label htmlFor="userPhoto">
//           <label className={css.uploader_label}>
//             {userPhoto || uploadedFileURL ? (
//               <img
//                 className={css.userPhoto}
//                 src={uploadedFileURL ? uploadedFileURL : userPhoto}
//                 alt="Userphoto"
//               />
//             ) : (
//               <h3 className={css.userLetter}>Name</h3>
//             )}
//             <input
//               className={css.uploader}
//               type="file"
//               accept="image/png, image/gif, image/jpeg, image/jpg"
//               id="userPhoto"
//               name="userPhoto"
              //   onChange={onChangePhotoHandler}
//             />
//           </label>
//           <Plus className={css.plus_icon} />
//         </label>
//       </div>
//       <label className={`${css.label} ${css.user_label}`} htmlFor="user">
//         <h4 id="user" name="user"></h4>
//         User
//       </label>

//       <div className={css.container}>
//         <div className={css.column}>
//           <label>
//             <p>User Name</p>
//             <input />
//           </label>

//           <label>
//             <p>Birthday</p>
//             <div className={css.datepicker_container}>
//               <DatePicker />
//             </div>
//           </label>

//           <label>
//             <p>Email</p>
//             <input />
//           </label>
//         </div>

//         <div className={css.column}>
//           <label>
//             <p>Phone</p>
//             <input />
//           </label>

//           <label>
//             <p>Skype</p>
//             <input />
//           </label>
//         </div>
//       </div>

//       <button className={css.button} type="submit" disabled={!isChanged}>
//         Save changes
//       </button>
//     </form>
//   );
// };


