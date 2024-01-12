import { CollectionConfig } from "payload/types";

export const Users : CollectionConfig = {
    slug: "users",
    auth: {
      verify :{
         generateEmailHTML: ({token}) => {
            return `<a href=>'${process.env.NEXT_SERVER_URL}/verify-email?token=${token}'>Verify Account</a>`
         },
      },
    },
    access: {
       read: () => true,
       create: () => true,
    },
    fields: [
        {
           name : 'role',
           defaultValue : 'user',
           required: true,
        //    admin:{
        //      condition: ({req}) => false,
        //    },
           type: "select",
           options: [
              {
                 label: "Admin", 
                 value: "value"
              },
              {
                 label: "user", 
                 value: 'user'
              }
           ]
        },
    ],
}
