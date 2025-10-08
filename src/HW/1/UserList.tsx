import {UserType} from "./type";


type UserListPropsType = {
  users: UserType[];
};

export const UserList = ({users}: UserListPropsType) => {
    return (
      <div id={'hw01-users'}>
        <h2>User List:</h2>

        <ul>
          {users.map((user) => (
              <li
                key={user.id}
                id={`hw01-user-${user.id}`}
              >
                <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                {user.address.street}, {user.address.city}
              </li>
            )
          )}

        </ul>
      </div>
    )
  }
;
