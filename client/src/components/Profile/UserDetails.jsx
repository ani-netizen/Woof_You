import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpgradeModal from "../Upgrade/UpgradeModal";
import { authSlice } from "../../redux/reducers/auth";

function UserDetails() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const dispatch = useDispatch();

  const reduxState = useSelector((globalState) => globalState.auth.user);
  return (
    <>
      <div className="flex w-full items-center">
        <div className="w-1/3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuE2ejpy-CjPVNdAhuIVch-8DRr20pvVwxs2pBWtl&s"
            alt=""
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center w-2/3">
          <div className="flex flex-col">
            <div>{reduxState?.fullName}</div>
            <div>{reduxState?.email}</div>
            <button>Add Pet</button>
          </div>
          <div className="flex flex-col">
            {reduxState?.isPremium === false &&
            reduxState?.isPremiumPlus === false ? (
              <p>Free</p>
            ) : reduxState?.isPremium === true &&
              reduxState?.isPremiumPlus === false ? (
              <p>Pro</p>
            ) : (
              <p>
                Pro<sup>+</sup>
              </p>
            )}
            <button onClick={() => setIsUpgradeModalOpen(true)}>Upgrade</button>
            <button onClick={() => dispatch(authSlice.actions.LOG_OUT())}>
              LogOut
            </button>
          </div>
        </div>
      </div>

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        setIsOpen={setIsUpgradeModalOpen}
      />
    </>
  );
}

export default UserDetails;
