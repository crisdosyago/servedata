import {NOUSER_ID} from './server.js';

const Perms = [
  // permissions for standard auth actions signup, login, logout
    [
      `${NOUSER_ID}:action/signup`,
      {
        create:true, 
      }
    ],
    [
      `${NOUSER_ID}:action/login`,
      {
        create:true, 
      }
    ],
    [
      `group/users:action/logout`,
      {
        create:true, 
      }
    ],
  
  // permissions for data entry actions based on regular users,
  // user admins, and global admins
    // regular user role
      [
        `group/users:table/deposit`,
        {
          create:true, 
          view:true
        }
      ],

    // user admin role
      [
        `group/user_admins:table/users`,
        {
          excise:true,
          view:true,
          alter:true,
          create:true, 
        }
      ],

    // global admin role
      [
        `group/global_admins:table/deposit`,
        {
          excise:true,
          view:true,
          alter:true,
          create:true, 
        }
      ],
      [
        `group/global_admins:table/users`,
        {
          excise:true,
          view:true,
          alter:true,
          create:true, 
        }
      ],
];

export default Perms;