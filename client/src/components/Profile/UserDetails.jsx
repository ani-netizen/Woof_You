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
      <div className="flex items-center w-11/12">
        <div className="w-1/3">
          <img
            src={reduxState?.profilePicture}
            alt="user"
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center w-2/3">
          <div className="flex flex-col gap-2">
            <div className="font-bold">{reduxState?.fullName}</div>
            <div>{reduxState?.email}</div>
            <button className="font-semibold">+ Add Pet</button>
          </div>
          <div className="flex flex-col gap-2">
            {reduxState?.isPremium === false &&
            reduxState?.isPremiumPlus === false ? (
              <p className="font-semibold">Free</p>
            ) : reduxState?.isPremium === true &&
              reduxState?.isPremiumPlus === false ? (
              <p className="font-bold text-amber-500">Pro</p>
            ) : (
              <p className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Pro<sup className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">+</sup>
              </p>
            )}
            {!(
              reduxState?.isPremium === true &&
              reduxState?.isPremiumPlus === true
            ) ? (
              <button
                onClick={() => setIsUpgradeModalOpen(true)}
                className="font-semibold text-sm py-1 px-2 bg-gradient-to-tr from-pink-200 to-blue-300 rounded text-slate-700"
              >
                Upgrade
              </button>
            ) : (
              <></>
            )}
            <button
              className="font-bold p-1 px-1 rounded-md bg-pink-100 text-slate-500"
              onClick={() => dispatch(authSlice.actions.LOG_OUT())}
            >
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
