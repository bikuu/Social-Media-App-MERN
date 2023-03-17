import "./FollowersCard.css";
import User from "../User/User";
import { getAllUser } from "./../../api/ApiCalls";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPerson = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPerson();
  }, []);

  return (
    <div className="FollowersCard">
      <h2>My Followers</h2>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
