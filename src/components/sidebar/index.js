import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
  const username = "p";
  const fullName = "e";

  return (
    <div className="p-4">
      <User username={"p"} fullName={"e"} />
      {/* <Suggestions userId={userId} following={following} loggedInUserDocId={docId} /> */}
    </div>
  );
}