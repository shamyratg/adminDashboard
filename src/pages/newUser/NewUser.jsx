import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input className="" type="text" placeholder="Shammy" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input className="" type="text" placeholder="Shammy Gutly" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input className="" type="text" placeholder="pochta@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input className="" type="text" placeholder="pass" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input className="" type="text" placeholder="+48 000 000 ***" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input className="" type="text" placeholder="Tagtabazar/Mary" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input className="" type="radio" id="male" value="male" />
            <label for="male">Male</label>
            <input className="" type="radio" id="female" value="female" />
            <label for="female">Female</label>
            <input className="" type="radio" id="other" value="other" />
            <label for="other">Other</label>
            <button className="newUserButton">Create</button>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserActive" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
}
