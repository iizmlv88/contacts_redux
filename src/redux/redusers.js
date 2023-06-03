import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT, CLEAR_STATUS } from "./type";

const initialState = {
  contacts: [
    {
      avatar: "40",
      email: "gh@cg.df",
      favorite: true,
      gender: "men",
      id: "5b590c20-239d-4bb8-aec5-9ae4ad33e567",
      name: "Test",
      phone: "+38 0354908689",
      status: "Family"
    },
    {
      id: "54f61ece-e808-4bcb-aaeb-3c711b5c7ff9",
      name: "sdfg",
      phone: "wert",
      email: "sdfgsdf@fdsg.sdfgsdfg",
      avatar: 34,
      gender: "men",
      status: "Private",
      favorite: true
    },
    {
      id: "56f61ece-e808-4bcb-aaeb-3c711b5c7ff9",
      name: "sd43534fg",
      phone: "wer546456t",
      email: "sdfgsd4564f@fdsg.sdfgsdfg",
      avatar: 4,
      gender: "men",
      status: "Private",
      favorite: true
    }
  ],
  searchTerm: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return {
              ...contact,
              ...action.payload.updateContact
            };
          }
          return contact;
        })
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        searchTerm: action.payload
      };
    case CLEAR_STATUS:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload) {
            return {
              ...contact,
              status: ""
            };
          }
          return contact;
        })
      };
    default:
      return state;
  }
};

export default reducer;
